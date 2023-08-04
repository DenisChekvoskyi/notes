function formatDate(inputDate) {
  const parts = inputDate.split(".");
  const day = parts[0];
  const monthNumber = parseInt(parts[1], 10) - 1;
  const year = parts[2];

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const monthName = months[monthNumber];

  return `${monthName} ${day}, ${year}`;
}

export default formatDate;
