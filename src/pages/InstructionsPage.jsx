import React from "react";

const InstructionsPage = () => {
    return (
        <div className="instructionsPage">
            <h1>👋 Hello User!</h1>
            <h2>Welcome to Your Travel Journal! 🌍✈️</h2>
            <p>
                We’re thrilled to have you here! This is your space to plan, track, and relive all your amazing adventures. Ready to explore what this app can do? Let’s dive in!
            </p>
            <hr />
            <h2>📖 What Can You Do Here?</h2>
            <ul>
                <li>
                    <strong>Plan New Trips:</strong> Got a new adventure in mind? Head to the <strong>Add New Trip</strong> page, fill in the details, and start dreaming!
                </li>
                <li>
                    <strong>Track Your Adventures:</strong> Use the <strong>My Trips</strong> page to see all your planned, completed, or even canceled trips. Keep your travel history all in one place!
                </li>
                <li>
                    <strong>Edit Trips:</strong> Plans changed? No problem! Visit the <strong>Edit Your Trips</strong> page to update trip details anytime.
                </li>
                <li>
                    <strong>Relive Your Trips:</strong> On the <strong>Trip Details</strong> page, you can revisit all the memories you’ve created, including descriptions and photos.
                </li>
                <li>
                    <strong>Learn More About Us:</strong> Curious about who we are? Check out the <strong>About Us</strong> page for our story.
                </li>
            </ul>
            <hr />
            <h2>🛠 How to Navigate?</h2>
            <p>
                Use the <strong>Sidebar</strong> to jump between pages. You’ll find links to the Home Page, My Trips, Add New Trip, Instructions, Edit Trips, and About Us. It's your compass in this adventure!
            </p>
            <hr />
            <h2>🎉 Quick Tips</h2>
            <ul>
                <li>Click on the <strong>trip title</strong> or <strong>See More</strong> to view detailed trip information.</li>
                <li>Want to delete a trip? Hit the <strong>Delete</strong> button, but be careful—it’s permanent!</li>
                <li>
                    Adding images? Paste the URLs of your favorite photos while creating or editing trips separating them with a coma!
                </li>
            </ul>
            <hr />
            <h2>💬 Need Help?</h2>
            <p>
                Got questions or suggestions? Let us know—we’d love to hear from you and make this app even better for you!
            </p>

            <p>
                So, what are you waiting for? Click around, explore, and start your next journey. Happy travels! 🌟
            </p>
        </div>
    );
};

export default InstructionsPage;
