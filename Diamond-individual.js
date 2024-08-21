document.getElementById('addMemberBtn').addEventListener('click', function () {
    const membersContainer = document.getElementById('membersContainer');
    const newMemberInput = document.createElement('input');
    newMemberInput.type = 'text';
    newMemberInput.className = 'member';
    newMemberInput.placeholder = 'Fill members with their registration number';
    membersContainer.appendChild(newMemberInput);
});

document.getElementById('groupForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const groupName = document.getElementById('groupName').value;
    const members = Array.from(document.getElementsByClassName('member')).map(input => input.value);
    const plan = document.getElementById('plan').value;
    const amount = document.getElementById('amount').value;
    const donationMessage = document.getElementById('donationMessage').value;

    // You can now handle form submission, e.g., send the data to the server or display a message
    console.log({
        groupName,
        members,
        plan,
        amount,
        donationMessage
    });

    alert('Form submitted successfully!');
});
