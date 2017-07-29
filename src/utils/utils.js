const COLORS = ['#34495E', '#2980B9', '#27AE60', '#2980B9'];

const getRandomIntInclusive = (min, max) => {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

const selectStyle = function () {
    // Delete previous styles
    const styles = document.querySelectorAll('style');
    styles.forEach((style, index) => {
        if(index >= 2) {
            style.parentNode.removeChild(style);
        }
    });

	// Create the <style> tag
	const style = document.createElement("style");

	// Add a media (and/or media query) here if you'd like!
	// style.setAttribute("media", "screen")
	// style.setAttribute("media", "only screen and (max-width : 1024px)")

	// WebKit hack :(
	style.appendChild(document.createTextNode(""));

	// Add the <style> element to the page
	document.head.appendChild(style);

	return style.sheet;
};

// Change the style of the UI
export const updateStyle = () => {
	// Get a random color 
	const randInt = getRandomIntInclusive(0, COLORS.length - 1);
	const color = COLORS[randInt];

    // Change the classes colors
	const sheet = selectStyle();
	sheet.insertRule(`.primary-color { color:${color}; }`, 0);
	sheet.insertRule(`.primary-color-background { background-color:${color}; }`, 0)
}
