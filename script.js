function sendParcel() {
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const address = document.getElementById("address").value;

    const trackingId = "TRK" + Math.floor(Math.random() *100000);

    const parcel = {
        name,
        phone,
        address,
        trackingId,
        status: "Pending"
    };

    // save to localStorage
    localStorage.setItem(trackingId, JSON.stringify(parcel));

    document.getElementById("result").innerText =
        "✅ আপনার Tracking ID " + trackingId;
}