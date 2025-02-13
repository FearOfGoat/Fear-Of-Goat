function copyAddress() {
    const address = "0xfDB89DB8e2C99204466e4024c1C647200FFa35B5";
    navigator.clipboard.writeText(address).then(() => {
        alert("Contract Address Copied!");
    });
}
