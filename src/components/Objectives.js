import React from 'react'
import associate1 from '../images/urosario.png'
import associate2 from '../images/ur.png'
import associate3 from '../images/lsacademy.png'
// import teacher from '../images/'


function Objectives() {
    return (
        <section className="objetives"> 
            <div className="generals">
                <div className="container">
                    <div className="course">
                        <h2>Objetivo del curso</h2>
                        <h3>Con el apoyo de la Universidad del Rosario, queremos:</h3>
                        <p>Fomentar en los estudiantes la creatividad, la memoria visual y la proyección mental, mediante un curso en donde se enseña a crear desde cero un modelo 3D con Blender 2.9 y se premia a los mejores resultados, para motivar a los estudiantes a continuar fortaleciendo lo aprendido.</p>
                    </div>
                    <div className="associates">
                        <img alt="associate 1" src={associate1}/>
                        <img alt="associate 2" src={associate2}/>
                        <img alt="associate 3" src={associate3}/>
                    </div>
                </div>
            </div>
            <div className="information">
                <div className="class">
                    <div className="teacher">

                    </div>
                </div>
                <div className="form"></div>
            </div>
        </section>
    )
}

export default Objectives
