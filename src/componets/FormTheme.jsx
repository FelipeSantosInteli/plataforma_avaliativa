import { Divider, TextField } from "@mui/material";
import FormScale from "./FormScale";



function FormTheme({title,color,question1,question2,question3}) {
    var formScaleCultural = [
        {
            value: "insuficiente",
            label: "Atitude Insuficiente"
        },
        {
            value: "pontual",
            label: "Atitude Pontual"
        },
        {
            value: "consistente",
            label: "Atitude Consistente"
        },
        {
            value: "excepcional",
            label: "Atitude Excepcional"
        }
    ]

    return(
        <div class="p-10">
            <div class="w-fit">
                <h1 class="font-semibold text-3xl">{title}</h1>
                <Divider sx={{width:"auto",borderColor:color,borderBottomWidth:".4rem"}}/>
            </div> 
            <section class="py-10 flex flex-col justify-between">

                <br />
                <FormScale question={question1} scale={formScaleCultural}/>
                <br />

                <br />
                <FormScale question={question2} scale={formScaleCultural}/>
                <br />

                <br />
                <FormScale question={question3} scale={formScaleCultural}/>
                <br />
                
                <div class="py-10">
                    <TextField
                    id="outlined-multiline-static"
                    label="Dê exemplos das atitudes:"
                    multiline
                    rows={7}
                    defaultValue=""
                    sx={{width:"50rem",backgroundColor:"#ffffff"}}
                    />
                </div>
                
            </section>
        </div>
        
    )
}

export default FormTheme;