import { Link } from 'react-router-dom'
import type { IJob } from '../../../../types/page/homepage'
import './index.less'

interface Iprops {
    job: IJob
}


const JobCard = (props: Iprops) => {
    const { title, partner, id, requirement, salary } = props.job
    return <Link to={`/job/${id}`} className="job-card">
        <span className="job-title">{title}</span>
        <div className="partner-salary">
            <span className="partner">{partner.name}</span>
            <span className="salary">{salary}</span>
        </div>
        <span className="requirement">{requirement}</span>
    </Link>
}

export default JobCard

interface MyButtonSchema {
    value: string
    color: string
}

interface IProps {
    schema: MyButtonSchema
}
const MyButton = (props: IProps) => {
    const { schema } = props;
    return <button style={{ backgroundColor: schema.color }}>{schema.value}</button>
}

export const Parents = () => {
    const schema: MyButtonSchema = {
        value: '跳转',
        color: '#eee'
    }

    return <MyButton schema={schema} />
}