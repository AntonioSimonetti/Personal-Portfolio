import  Paper  from "@mui/material/Paper";

const Card = () => {

    const styles = {
        card: {
         height: "10rem",
         border: "2px solid blue",
         display: "flex",
         justifyContent: "center",
         alignItems: "center",
         backgroundColor: "red",
        },
    }
    
    return (
    <Paper style={styles.card}>PAPERO</Paper>
    )
}

export default Card;