export default function() {
    return (
        <section>
            <h1>Donate <i className="fa-sharp-duotone fa-solid fa-hand-holding-circle-dollar"></i></h1>
            <p>Your donation can make a real difference—it could mean a clean diaper for my daughter tonight, or even some food if you’re feeling generous. 
               All jokes aside, don’t feel pressured to donate. The content I provide is completely free, but if you’d like to help a brother out, it’s always appreciated. 
            </p>
            <a 
                href="https://www.paypal.com/donate/?hosted_button_id=NCRQHDJWRPDHC" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                    display: "inline-block",
                    padding: "10px 20px",
                    backgroundColor: "#0070BA",
                    color: "white",
                    textDecoration: "none",
                    borderRadius: "5px",
                    fontWeight: "bold",
                    textAlign: "center",
                    marginTop: "1rem"
                }}
            >
                Donate via PayPal
            </a>
        </section>
    );
}
