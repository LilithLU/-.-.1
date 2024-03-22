const addButton = document.getElementById("add-meeting-btn");
const meetingsList = document.getElementById("meetings-list");

addButton.addEventListener("click", function() {
  const name = document.getElementById("meeting-name").value;
  const place = document.getElementById("meeting-place").value;
  const time = document.getElementById("meeting-time").value;
  const description = document.getElementById("meeting-description").value;
  const participants = document.getElementById("meeting-participants").value;

  const meetingCard = document.createElement("div");
  meetingCard.classList.add("meeting-card");
  meetingCard.innerHTML = `
    <h3>${name}</h3>
    <p><strong>Место проведения:</strong> ${place}</p>
    <p><strong>Время проведения:</strong> ${time}</p>
    <p><strong>Описание:</strong> ${description}</p>
    <p><strong>Участники:</strong> ${participants}</p>
  `;

  meetingsList.appendChild(meetingCard);

  // Clear input fields
  document.getElementById("meeting-name").value = "";
  document.getElementById("meeting-place").value = "";
  document.getElementById("meeting-time").value = "";
  document.getElementById("meeting-description").value = "";
  document.getElementById("meeting-participants").value = "";
});