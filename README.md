1. Project setup
2. Basic calculation functions
3. Basic styling
4. Implemented initial displayValue setting.
5. Implemented clear button functionality.
6. Linked user input with operation functionality. 
7. Fixed float bug.
8. Fixed nasty chain operations bug.
9. Fixed even nastier chain operations bug when chaining after an equals.
10. Fixed multiplication / division as first operation bug. 
11. Implemented digit amount limitation and corresponding rounding. 
12. Worked around the pressing '=' before any other input bug.
13. Implemented block to entering multiple floating points.
14. Implemented C button for removing last digit entered if last entry was a digit, not operator. 

15. If I was to rebuild this project, the first thing I'd do differently is split up the operation button listeners, this would remove lots of filtering logic and work arounds, along with making it far more readable. 

16. TODO: Add sub-display to show user their calculation. 