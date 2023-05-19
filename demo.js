function aggregateByDay(D) {
  const result = {};
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];


  for (const dateStr in D) {
    const date = new Date(dateStr);
    const dayOfWeek = daysOfWeek[date.getDay()];
    const value = D[dateStr];

    if (!result[dayOfWeek]) {
      result[dayOfWeek] = value;
    } else {
      result[dayOfWeek] += value;
    }
  }

  // Fill in missing days with average of previous and next day
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  for (let i = 1; i <= 5; i++) {
    const day = days[i];
    const prevDay = days[i - 1];
    var nextDay = days[i + 1];
    var len = 1;
    if (!result[day]) {
      for (let j = i + 1; j < 7; j++) {
        len++;
        nextDay = days[j];
        if (!result[nextDay]) {
          continue;
        }
        break;
      }
      const last = result[nextDay];
      const first = result[prevDay];
      const diff = (last - first);
      for (var k = 0; k < len - 1; k++) {
        const currentNum = first +((k+1)*diff)/len;
        result[days[k + i]] = currentNum;
      }
    }
  }
  const ans = {};
  for(var i=0;i<7;i++){
    ans[days[i]]=result[days[i]];
  }
  return ans;
}

D = { "2020-01-01":4,
"2020-01-02":4,
"2020-01-03":6,
"2020-01-04":8,
 "2020-01-05":2,
  "2020-01-06":-6,
  "2020-01-07":2,
  "2020-01-08":-2,};
// "2020-01-01":6,"2020-01-04":12,"2020-01-07":4, "2020-01-05": 14, "2020-01-06": 2 
const dict = aggregateByDay(D);
console.log(dict);

module.exports=aggregateByDay
