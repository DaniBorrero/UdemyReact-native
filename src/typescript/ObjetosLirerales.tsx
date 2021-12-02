//interface ayuda a que typescript sepa como va a lucir el objeto

interface Persona {
    nombreCompleto: string,
    edad: number,
    direccion:Direccion,    
}

interface Direccion {
    pais:string,
    casaNo: number,
}



export const ObjetosLirerales = () => {
    const persona: Persona ={
        nombreCompleto: 'Daniel',
        edad: 32,
        direccion: {
            pais: 'Chile',
            casaNo: 420
        }
    }


    return (
        <>
            <h3>Obejetos Litereales</h3>    
            <code>
                <pre>
                    {JSON.stringify(persona, null, 2)}
                </pre>
            </code>        
        </>
    )
}
