//通过队列计算最近的请求次数
var RecentCounter = function () {
  this.queue = [];
};

/**
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function (t) {
  this.queue.push(t);
  while (this.queue[0] < t - 3000) {
    this.queue.shift();
  }
  return this.queue.length;
};

const r = new RecentCounter();

console.log(r);

console.log(r.ping(1));
r.ping(2);
r.ping(3001);
r.ping(7000);
