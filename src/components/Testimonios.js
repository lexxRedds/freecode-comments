import { Users } from "./Users";

function Testimonios() {
    return (
        <>
            <article className="container-md ">
                <div className="h1 p-3 text-center">Esto es lo que dicen nuestros usuarios acerca de FreeCodeCamp</div>
                {Users && Users.map(user => (
                    <section key={user.id} className="m-5 shadow  ">
                        <div className="row card bg-white flex-row ">
                            <div className="card-img-left col-lg-4 sec-item p-0">
                                <img src={require(`../assets/images/img-${user.firstName.toLowerCase()}.png`)} alt={user.firstName + user.lastName} />
                            </div>
                            <div className="card-body col-lg-6 sec-item text-center m-4 ">
                                <div className="display-8" ><strong>{user.firstName} {user.lastName}</strong> in {user.country}</div>
                                <div className="display-8" >{user.occupation} at <strong>{user.company}</strong></div>
                                <p>{user.comment}</p>
                            </div>
                        </div>
                    </section>
                ))}
            </article>
        </>
    );
}
export default Testimonios;