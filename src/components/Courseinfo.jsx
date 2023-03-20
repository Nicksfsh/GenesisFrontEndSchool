import {Link} from "react-router-dom";

const Courseinfo = (props) => {

    return (<div>
        <div className="block_title"><b>{props.title}</b></div>
        <div><img width="100%" src={props.previewImageLink}/></div>
        <div className="block_description">{props.description}</div>
        <div className="lessons_title">{props.lessonsCount} Lessons</div>
        <div className="lessons_title">{props.tags}</div>
        <div className="lessons_title">Rating: {props.rating}</div>

        <Link to={`/courseinfopage/${props.courseId}`}>
            <div className="button button--outline">READ MORE...</div>
        </Link>

    </div>)
}

export default Courseinfo