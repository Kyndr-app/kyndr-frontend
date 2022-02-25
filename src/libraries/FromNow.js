const opts = {
  now: "just now",
  seconds: {
    1: "s ago",
    2: "s ago",
  },
  minutes: {
    1: "min ago",
    2: "min ago",
  },
  hours: {
    1: "hr ago",
    2: "hr ago",
  },
  days: {
    1: "d ago",
    2: "d ago",
  },
  weeks: {
    1: "w ago",
    2: "w ago",
  },
  months: {
    1: "mon ago",
    2: "mon ago",
  },
  years: {
    1: "yr ago",
    2: "yr ago",
  },
};

const getUnit = (interval, unit, opts) => {
  let ret;

  if (typeof opts[unit] === "string") return opts[unit];

  Object.keys(opts[unit]).forEach(function (key) {
    if (key <= interval) ret = opts[unit][key];
  });
  return ret;
};

const dates = {
  years: 31536000,
  months: 2592000,
  weeks: 604800,
  days: 86400,
  hours: 3600,
  minutes: 60,
  seconds: 1,
};

export default function fromNow(date) {
  const past = date instanceof Date ? date : new Date(date);
  const now = new Date();
  if (!isFinite(past) || !date) throw new TypeError("Failed to parse the date");
  const seconds = Math.floor((now - past) / 1000);
  if (seconds < 0) throw new TypeError("Please put date in past");
  let end = "";
  for (let unit in dates) {
    let interval = Math.floor(seconds / dates[unit]);
    if (interval >= 1) {
      end = interval + " " + getUnit(interval, unit, opts);
      break;
    } else if (interval === 0 && unit === "seconds") {
      end = opts.now;
      break;
    }
  }
  return end;
}
