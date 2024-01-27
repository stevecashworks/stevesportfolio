export const mobile = (styleString) => {
  const styles = styleString
    .split("\n")
    .map((str) => str.trim())
    .filter((i) => i != "");


  return `
    @media(max-width:1200px){
        ${styles.join("\n")}
    }
    
    `;
};
export const tablet = (styleString) => {
  const styles = styleString
    .split("\n")
    .map((str) => str.trim())
    .filter((i) => i != "");

  return `
    @media(max-width:800px){
        ${styles.join("\n")}
    }
    
    `;
};
