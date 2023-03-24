import {Link, useParams} from "react-router-dom"
import {useEffect, useState} from "react"
import Hls from 'hls.js'


const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIzMjUxY2Y1OS05NGMxLTRiN2UtOWI4Yy00NDc4ZTQyOTAzNWUiLCJwbGF0Zm9ybSI6InN1YnNjcmlwdGlvbnMiLCJpYXQiOjE2NzkyNDIwOTYsImV4cCI6MTY4MDE0MjA5Nn0.AFN29weYV_ti-8IFWA2b467T--tIPgOkx48-gEJTpBg"

const CourseInfopage = () => {
    const {courseId} = useParams()
    const [course, setCourse] = useState()
    const [lesson, setLesson] = useState(0)

    useEffect(() => {
        fetch(`https://api.wisey.app/api/v1/core/preview-courses/${courseId}`, {
            headers: {"Authorization": `Bearer  ${token}`}
        })
            .then((response) => {
                return response.json()
            })
            .then((data) => setCourse(data))
    }, [])


    let video = document.getElementById('video_id')

    if (Hls.isSupported()) {
        let hls = new Hls({
            //  debug: true,
        });
        hls.attachMedia(video)
        hls.on(Hls.Events.MEDIA_ATTACHED, function () {
            hls.loadSource(course?.lessons[lesson].link)
            hls.on(Hls.Events.MANIFEST_PARSED, function (event, data) {
            })
        })

    } else {
        console.log("This device is not capable of playing hls streams")
    }

    return (
        <div className="lesson_card">
            <div className="block_title">{course?.title}</div>
            <div><img className="cover" alt="cover" src={course?.previewImageLink + '/cover.webp'}/></div>
            <video id="video_id"  controls
                   poster={course?.lessons[lesson].previewImageLink + '/lesson-' + course?.lessons[lesson].order + '.webp'}/>
            <div className="block_description">{course?.description}</div>
            <div className="block_lessons">
                <ul className="lessons_title">
                    {course?.lessons.sort((a, b) => a.order > b.order ? 1 : -1).map((item, index) => (item.status === "locked") ?
                        <li onClick={() => setLesson(index)} className={lesson === index ? "active" : ''}
                            key={item.id}>Lesson {index + 1}: {item.title}<b className='locked'> Locked</b></li> :
                        <li onClick={() => setLesson(index)} className={lesson === index ? "active" : ''}
                            key={item.id}>Lesson {index + 1}: {item.title}<b className='active'> Free</b></li>)}

                </ul>
            </div>
            <Link className="button button--outline" to="/">BACK TO All COURSES</Link>
        </div>
    )
}

export default CourseInfopage