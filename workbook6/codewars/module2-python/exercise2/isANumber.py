# Given a string s, write a method (function) that will return true if its a valid single integer 
# or floating number or false if its not.

import re

def is_digit(s):
    # Regular expression pattern for a floating point number
    pattern = r'^-?(0|[1-9]\d*)(\.\d+)?$'
    
    # Check if the string matches the pattern
    if re.match(pattern, s):
        return True
    else:
        return False