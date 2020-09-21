module.exports=function (source) {
    return `
        const eleStyle=document.createElement("style");
        eleStyle.innerHTML=${source};
        document.head.appendChild(eleStyle);
    `;
};