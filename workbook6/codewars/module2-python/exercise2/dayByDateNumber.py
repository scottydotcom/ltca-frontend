# Write a function that will help you determine the date 
# if you know the number of the day in the year, as well as whether the year is a leap year or not.
# The function accepts the day number and a boolean value isLeap as arguments, 
# and returns the corresponding date of the year as a string "Month, day".

def get_day(day, is_leap): 
    # Define the number of days in each month
    days_in_month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

    # If it's a leap year, adjust the number of days in February
    if is_leap:
        days_in_month[1] = 29

    # Define the month names
    month_names = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

    # Iterate through the months and find the one that matches the day
    for month in range(len(days_in_month)):
        if day <= days_in_month[month]:
            break
        day -= days_in_month[month]
        month += 1

    # Format and return the result
    return f"{month_names[month]}, {day}"
print(get_day(29, True))