import tableData from '../../i18n/fr/protocols/epaule/epaule.json'
import Generalites from '../../components/protocols/Generalites'
import ListTextSection from '../../components/protocols/ListTextSection';
import ParagraphTextSection from '../../components/protocols/ParagraphTextSection';

 const Protocol = () => {
  return (
    <div className="flex">
        <div className="sticky top-0 left-0 z-20 self-start" style={{width:"20%", top:"200px"}}>
            <ul>
                <li>Menu</li>
            </ul>
        </div>
    <div className="" style={{width:"80%"}}>
        <Generalites rows={tableData.rows} />
        <ListTextSection content={tableData.technique} />
        <ParagraphTextSection content={tableData.anatomyDescription} />
    </div>
    </div>
  )
}

export default Protocol;


