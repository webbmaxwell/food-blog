import styled from "styled-components";

function FrenchOnionSoup() {
    let now = new Date();
    let year = now.getFullYear();
    return(
        <div className="Blogpost" id="latest">
            <h3>French Onion (Soup)-erpower</h3>
            <p>I have been a fan of French Onion Soup since I first tried it around {year - 2018} years ago on a date to the Red Rock Brewery with my wife. I had never experienced flavors in that combination before, or that much cheese in a single dish!</p>
            <p>I have been meaning to try it myself, but between the time it takes to make it, needing the ramekins/oven-safe bowls, and the cost of the dang Gouda, I had plenty of reasons to keep delaying my attempt. That all changed when I discovered <a href="https://www.thekitchn.com/how-to-make-french-onion-soup-in-the-slow-cooker-start-to-finish-cooking-lessons-from-the-kitchn-215696?utm_source=pinterest&utm_medium=social&utm_campaign=managed&utm_content=custompin&crlt.pid=camp.1fPOaGLAuX01" target="_blank">this recipe</a> on Pinterest for a slow-cooker French Onion Soup!</p>
            <p>Expenses justified, it was still pretty time-consuming; I had to start cooking the onions at 10 PM Saturday night, leave them on until 8 AM when I got up to add the broth, then let that cook as a whole soup until around 4 PM. Then I served up the soup into my ramekins and added the cheese and bread, baked those to melt the cheese, then broiled for a couple of minutes to brown the cheese.</p>
            <p>And it was fantastic.</p>
            <p>I will say, it seems like I let the cheese broil a bit too long because it ended up a little bit too melted, but all in all it turned out great. I paired it with breadsticks and olive oil/balsamic vinegar, and a lemon arugula salad that included a homemade lemon vinaigrette. I was pretty proud of how it all came together (my mother-in-law even asked me for the recipe!).
            Needless to say, I will be trying this recipe again
            </p>
        </div>
    )
}

export default FrenchOnionSoup;