import { Clock, FileText, Heart, ShieldQuestionIcon } from 'lucide-react'
import { ScrollArea } from './ui/Scrollarea'
export default function Main() {
  return (
    <main className="flex-1 p-4">
    <div className=" mx-auto">
      <div className="bg-teal-500 text-white p-6 rounded-t-lg shadow-md">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold mb-2">Beginnen Sie Ihre Verkaufsreise 👋</h2>
            <p>Entdecken Sie mühelos jede Facette Ihres Verkaufsmandatsvertrags.</p>
          </div>
          <ShieldQuestionIcon className="w-6 h-6" />
        </div>
      </div>

<ScrollArea className='h-[67vh] rounded-b-lg shadow-md '>
      {[1, 2,3].map((i) => (
        <div key={i} className="bg-white  overflow-hidden">
          <div className="p-6 flex flex-col md:flex-row gap-6">
            <img
              src="https://media.istockphoto.com/id/1133767597/photo/happy-business-colleagues-in-modern-office-using-tablet.webp?a=1&b=1&s=612x612&w=0&k=20&c=bJegzGpKmTkCMPom6-lCFZ-iHz4MWzv6PlyMBAFjuz0="
              alt="Couple"
              width={300}
              height={200}
              className="rounded-lg object-cover w-full md:w-1/3"
            />
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-2">Die Immobilie in der Scheidung</h3>
              <p className="text-gray-600 mb-4 text-sm">
                Eine Ehescheidung kann die familiäre und wirtschaftliche Situation verändern. In diesem Ratgeber vermitteln wir Ihnen, wie Sie sich im Umfeld von Scheidungsverhandlungen gezielt Gehör und Geltung verschaffen können. Auch der Immobilienbesitz spielt eine wichtige Rolle. Sollten Sie den Wert noch nicht ermittelt haben, können Sie diesen mit unserer Marktpreisanalyse schnell und unkompliziert online bestimmen lassen.
              </p>
              <div className="flex items-center gap-4 text-gray-500 text-sm">
                <span className="flex items-center gap-1">
                  <FileText className="w-4 h-4" />
                  52 Seiten
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  18.06.2024
                </span>
                <span className="flex items-center gap-1">
                  <FileText className="w-4 h-4" />
                  PDF
                </span>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-6 py-4 flex justify-between items-center">
            <button className="bg-teal-500 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-teal-600 transition-colors">
              Download anfordern
            </button>
            <button className="text-gray-400 hover:text-red-500 transition-colors" aria-label="Add to favorites">
              <Heart className="w-6 h-6" />
            </button>
          </div>
        </div>
      ))}
      </ScrollArea>
    </div>
  </main>
  )
}