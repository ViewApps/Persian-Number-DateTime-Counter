# Persian-Number-DateTime-Counter
js liberary to Counter Numbers and DateTimes, with persian and English Digit

## Installation
Add files to web page
```
<link rel="stylesheet" href="src/persian-number-datetime-counter.css">
...
...
<script src="https://code.jquery.com/jquery-3.6.0.slim.min.js"></script>
<script src="src/persian-number-datetime-counter.js"></script>
```

## Usage
### Number Counter:
```
<div>
   <span class="fa-num-counter" data-intravel="3.5" data-counter-to="2150"></span>
   <span class="fa-num-counter" data-intravel="3" data-counter-to="15616"></span>
   <span class="fa-num-counter" data-intravel="5" data-counter-to="94549846513"></span>
   <span class="fa-num-counter en-digit-counter" data-intravel="2.55" data-counter-to="9500"></span>
   <span class="fa-num-counter en-digit-counter" data-intravel="2" data-counter-to="205"></span>
</div>
...
...
<script>
   $(function () {
      var callback = (arg) => {
          $(arg).css('transition', 1000 + 'ms').css('color', 'red');
                setTimeout(() => { $(element).css('color', 'orange'); }, 1000);
          };
          $('.fa-num-counter').each((i, item) => {
              $(item).initNumberCounter(callback );
          });
      });
</script>
```

### Group Number Counter:
```
<div class="fa-group-num-counter" data-intravel="5">
   <span class="fa-num-counter-item" data-counter-to="215"></span> 
   <span class="fa-num-counter-item" data-counter-to="894498"></span> 
   <span class="fa-num-counter-item" data-counter-to="1561324"></span> 
   <span class="fa-num-counter-item en-digit-counter" data-counter-to="265432"></span>
</div>
...
...
<script>
   $(function () {
      var callback = (arg) => {
              $(arg).find('.fa-num-counter-item').each((i, item) => {
                    $(item).css('transition', i * 1000 + 'ms').css('color', 'red');
                    setTimeout(() => { $(item).css('color', 'orange'); }, (i * 1000) + 500);
                });
          };
      $('.fa-group-num-counter').initGroupNumberCounter(callback);
   });
</script>
```

### DateTime Counter Down
```
<div class="fa-dt-counter" data-dateTime="2025-01-13">
   <span class="fa-dt-counter-days" data-content="روز"></span>
   <span class="fa-dt-counter-hours" data-content="ساعت"></span>
   <span class="fa-dt-counter-minutes" data-content="دقیقه"></span>
   <span class="fa-dt-counter-seconds" data-content="ثانیه"></span>
</div>
<!-- OR -->
<div class="fa-dt-counter en-digit-counter" data-dateTime="2025-01-13 13:13">
   <span class="fa-dt-counter-days" data-content="days"></span>
   <span class="fa-dt-counter-hours" data-content="hours"></span>
   <span class="fa-dt-counter-minutes" data-content="min"></span>
   <span class="fa-dt-counter-seconds" data-content="sec"></span>
</div>
...
...
<script>
   $(function () {
      $('.fa-dt-counter').initDateCounters();
   });
</script>
```
### DateTime Counter Up
```
<div class="fa-dt-counter-up" data-dateTime="2000-01-13">
   <span class="fa-dt-counter-days" data-content="روز"></span>
   <span class="fa-dt-counter-hours" data-content="ساعت"></span>
   <span class="fa-dt-counter-minutes" data-content="دقیقه"></span>
   <span class="fa-dt-counter-seconds" data-content="ثانیه"></span>
</div>
<!-- OR -->
<div class="fa-dt-counter-up en-digit-counter" data-dateTime="2000-01-13 13:13">
   <span class="fa-dt-counter-days" data-content="days"></span>
   <span class="fa-dt-counter-hours" data-content="hours"></span>
   <span class="fa-dt-counter-minutes" data-content="min"></span>
   <span class="fa-dt-counter-seconds" data-content="sec"></span>
</div>
...
...
<script>
   $(function () {
      $('.fa-dt-counter-up').initUpDateCounters();
   });
</script>
```

### DateTime Counter Down + callback
```
<div class="fa-dt-counter" data-dateTime="2025-01-13">
   <span class="fa-dt-counter-days" data-content="روز"></span>
   <span class="fa-dt-counter-hours" data-content="ساعت"></span>
   <span class="fa-dt-counter-minutes" data-content="دقیقه"></span>
   <span class="fa-dt-counter-seconds" data-content="ثانیه"></span>
</div>
<!-- OR -->
<div class="fa-dt-counter en-digit-counter" data-dateTime="2025-01-13 13:13">
   <span class="fa-dt-counter-days" data-content="days"></span>
   <span class="fa-dt-counter-hours" data-content="hours"></span>
   <span class="fa-dt-counter-minutes" data-content="min"></span>
   <span class="fa-dt-counter-seconds" data-content="sec"></span>
</div>
...
...
<script>
   $(function () {
      var callback = (arg) => {
         $(arg).css('color', 'red').initUpDateCounters();
      };
      $('.fa-dt-counter').initDateCounters(callback);
   });
</script>
```
## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

