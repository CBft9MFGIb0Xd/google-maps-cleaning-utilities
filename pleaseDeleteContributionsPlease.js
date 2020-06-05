// Google Maps - Delete All Contributions
// 1. Go to Google Maps, on your desktop
// 2. Open the left tab menu
// 3. Click on "Your contributions"
// 4. Select the tab "Photos" or "Reviews"
// 5. Scroll down until all or most of all pictures (or reviews) are shown in list
// 6. Open the Developer tools (F12, on Firefox or Chrome)
// 7. Open the Console tab
// 8. Copy Paste this script
// 9. Type pleaseDeleteContributionsPlease(), wait for it to be done.
  
var pleaseDeleteContributionsPlease = function () {

    var confirmDeleteContribution = function() {
        [...document.querySelectorAll('button[class~="blue-button-text"]')].forEach( (a) => { 
            a.style.border = "thick solid red";
            a.click(); 
        });
        setTimeout(scrollToBottom, 5000);
    }
        
    var deleteContribution = function() {
        [...document.querySelectorAll('div[class="action-menu-entry-text"]')].forEach( (a) => { 
            if (a.innerHTML.includes("Delete")
                || a.innerHTML.includes("Elimina")) {
                a.parentElement.style.border = "thick solid red";
                a.parentElement.click(); 
            }
        });
        setTimeout(confirmDeleteContribution, 600);
    }

    var removeMe = function() {
        var items = [...document.querySelectorAll('button[class*="action-menu"]')];
        var elem = items[0];
        var numberOfItems = [...document.querySelectorAll('button[class*="action-menu"]')].length;
        if (currentTaskNum < numberOfItems && elem) {
            
            elem.style.border = "thick solid red"; 
            elem.click();

            // goes to the next item
            currentTaskNum = currentTaskNum + 1;
            console.log('task:', currentTaskNum, 'of', numberOfItems);
            // set to delete the item
            setTimeout(deleteContribution, 600);
        
        } else {
            clearTimeout();
            console.log('DONE. You did a favor to your past and present self. Now, go print one of your favorite pictures and hang it on a wall, please.');
        }  
    };

    var scrollToBottom = function() {
        document.querySelector("#pane > div > div.widget-pane-content.scrollable-y > div > div > div.section-layout.section-scrollbox.scrollable-y.scrollable-show").scroll(0, 10000000000);
        
        // start iterating through `items`
        setTimeout(removeMe, 5000);
    };

    // these are used inside the above functions
    var currentTaskNum = 0; 
    scrollToBottom();
}
