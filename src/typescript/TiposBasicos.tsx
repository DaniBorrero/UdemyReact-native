//tipos basicos de typescript

export const TiposBasicos = () => {
    const nombre: string  = 'Daniel';
    const edad: number = 32;
    const estaActivo: boolean = true;

    const poderes:string[] = []//'Velocidad', 'Volar', 'Respirar en el agua'

    
    
    return (
        <div>
            <h3>Tipos básicos</h3>
            {nombre}, {edad}, {(estaActivo) ? 'activo' : 'Inactivo'}
            <br />
            {poderes.join(', ')}
        </div>
    )
}
