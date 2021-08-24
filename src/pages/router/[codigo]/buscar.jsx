import { useRouter } from "next/dist/client/router"

export default function buscar(){
    const router =  useRouter()
    const codigo = router.query.codigo
    return (<div>
            buscar dinamica {codigo}
    </div>)
}