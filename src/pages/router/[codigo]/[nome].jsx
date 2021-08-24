import { useRouter } from "next/dist/client/router"

export default function buscar(){
    const router =  useRouter()
    const codigo = router.query.codigo
    const nome = router.query.nome
    return (<div>
            buscar dinamica {codigo} + {nome}
    </div>)
}