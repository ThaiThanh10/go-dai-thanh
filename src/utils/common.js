//generate id
const sample = (d, fn = Math.random) => {
  if (d.length === 0) {
    return;
  }
  return d[Math.round(fn() * (d.length - 1))];
};

export const generateUid = (limit = 11, fn = Math.random) => {
  const allowedLetters = ["abcdefghijklmnopqrstuvwxyz", "ABCDEFGHIJKLMNOPQRSTUVWXYZ"].join("");
  const allowedChars = ["0123456789", allowedLetters].join("");
  const arr = [sample(allowedLetters, fn)]; // sample 1 to make sure it starts with a letter
  for (let i = 0; i < limit - 1; i++) {
    arr.push(sample(allowedChars, fn));
  }
  return arr.join("");
};

export const createQueueTask = () => {
  let queue = []; // [{id, fn, resolve, reject}]
  let running = false;
  let currentAbort = null;
  let currentJob = {};

  const getState = () => ({
    isRunning: running,
    pendingCount: queue.length + (running ? 1 : 0),
  });

  const processNext = () => {
    if (running) return;
    const next = queue.shift();
    if (!next) {
      running = false;
      return;
    }

    running = true;
    currentJob = next;
    console.log("Task running: ", next.id);

    const controller = new AbortController();
    currentAbort = controller;

    Promise.resolve()
      .then(() => next.fn(controller.signal))
      .then(next.resolve, next.reject)
      .finally(() => {
        running = false;
        currentAbort = null;
        queueMicrotask(processNext); // tiếp tục job kế
      });
  };

  const push = (fn, { priority = false, id } = {}) => {
    return new Promise((resolve, reject) => {
      const job = { id: id || generateUid(), fn, resolve, reject };
      if (priority) queue.unshift(job);
      else queue.push(job);

      if (!running) processNext();
    });
  };

  const clear = () => {
    while (queue.length) {
      const job = queue.shift();
      job.reject(new Error("Queue cleared"));
    }
  };

  const abortCurrent = () => {
    currentAbort?.abort();
  };

  const remove = (id) => {
    if (currentJob.id === id) return abortCurrent();
    queueMicrotask(() => (queue = queue.filter((q) => q.id !== id)));
  };

  return {
    push,
    remove,
    clear,
    abortCurrent,
    currentJob,
    getState,
  };
};
