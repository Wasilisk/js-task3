const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

const dateFormat = () => {
    const currentDate = new Date();
    const formatDate = ('0' + currentDate.getDate()).slice(-2) + ' '
        + monthNames[currentDate.getMonth()] + ', '
        + currentDate.getFullYear();
    return formatDate
}

module.exports = dateFormat;