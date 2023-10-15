$(document).ready(function() {
    // Fetching JSON data
    $.getJSON("data/members.json", function(data) {
        let members = data.members;
        let memberContainer = $("#memberContainer");

        // Function to create member cards
        function createMemberCard(member) {
            let card = $("<div>").addClass("member-card");
            let image = $("<img>").attr("src", "data/" + member.image);
            let name = $("<div>").addClass("member-name").text(member.name);
            let address = $("<div>").addClass("member-address").text(member.address);
            let phone = $("<div>").addClass("member-phone").text(member.phone);
            let website = $("<a>").addClass("member-website").attr("href", member.website).text(member.website);
            let membershipLevel = $("<div>").addClass("membership-level").text("Membership Level: " + member.membership_level);
            let otherInfo = $("<div>").addClass("other-info").text(member.other_information);

            card.append(image, name, address, phone, website, membershipLevel, otherInfo);
            return card;
        }

        // Function to create list items
        function createListItem(member) {
            let listItem = $("<li>").addClass("list-item");
            let image = $("<img>").attr("src", "data/" + member.image);
            let name = $("<div>").addClass("member-name").text(member.name);
            let address = $("<div>").addClass("member-address").text(member.address);
            let phone = $("<div>").addClass("member-phone").text(member.phone);
            let website = $("<a>").addClass("member-website").attr("href", member.website).text(member.website);
            let membershipLevel = $("<div>").addClass("membership-level").text("Membership Level: " + member.membership_level);
            let otherInfo = $("<div>").addClass("other-info").text(member.other_information);

            listItem.append(image, name, address, phone, website, membershipLevel, otherInfo);
            return listItem;
        }

        // Rendering the initial grid view
        members.forEach(function(member) {
            memberContainer.append(createMemberCard(member));
        });

        // Toggle functionality
        $("#toggleButton").click(function() {
            memberContainer.empty(); // Clearing the current view
            if (memberContainer.hasClass("grid-container")) {
                memberContainer.removeClass("grid-container").addClass("member-list");
                members.forEach(function(member) {
                    memberContainer.append(createListItem(member));
                });
            } else {
                memberContainer.removeClass("member-list").addClass("grid-container");
                members.forEach(function(member) {
                    memberContainer.append(createMemberCard(member));
                });
            }
        });
    });
});