import { useRouter } from "next/dist/client/router"


export default function param(){
    const router = useRouter()
    const nome = router.query.nome
    const id = router.query.id
    return (
        <div>
            {nome} + {id}
        </div>
    )
}