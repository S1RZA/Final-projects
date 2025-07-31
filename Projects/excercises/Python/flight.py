flight = {
    'JK-567': {
        'From': 'Colombia',
        'To': 'USA',
        'seats': ['A1','A2','A3','A4'],
        'Time' : ('05:30')
        }
}
seats_re = []

def reserve():
    reservation = input('Enter your reservation seat: ').upper()
    while reservation not in flight['JK-567']['seats']:
        print('This seat is not available')
        reservation = input('Please, Enter your reservation seat: ').upper()
    if validate_available_seats(seats_re,reservation):
        print('This seat is available')
    else:
        print('This seat is not available')
    return seats_re 
    
def validate_available_seats(seats_re,reservation):
    if reservation in seats_re:
        return False
    else:
        seats_re.append(reservation)
        return True

def percentage():
    total_seats = len(flight['JK-567']['seats'])
    reserved_seats = len(seats_re)
    percentage = (reserved_seats / total_seats) * 100
    print(f'The percentage of reserved seats is: {percentage:.2f}%')
    return percentage
def archive():
    archive = open("report.txt", "w")
    archive.write(f"hola {flight}")
    archive.close()

def main():
    reserve()
    archive()
    percentage()
main()