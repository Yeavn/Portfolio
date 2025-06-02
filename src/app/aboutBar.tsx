export default function AboutBar({ skill, percentage }: { skill: string, percentage: number }) {
    const clampedPercentage = Math.max(0, Math.min(100, percentage));

    const circleLeftPosition = `calc(${clampedPercentage}% - 7.5px)`;
    return (
        <div>
            <h1 className="text-[#C1C1C1] text-2xl">{skill}</h1>
            <div className="relative"> 
                <div
                    className="w-[15px] aspect-square bg-[#C1C1C1] ring-1 ring-[#878787] rounded-full absolute -top-1" 
                    style={{ left: circleLeftPosition }}
                ></div>
                <div className="bg-[#C8C8C8] w-full h-2 rounded-full mt-2"> 
                    <div
                        className="about-gradient h-2 rounded-full"
                        style={{ width: `${clampedPercentage}%` }}
                    ></div>
                </div>
            </div>
        </div>
    );
}

// Stelle sicher, dass 'about-gradient' in deiner globalen CSS-Datei definiert ist.
// Beispiel:
/*
  .about-gradient {
    background: linear-gradient(to right, #878787, #C1C1C1);
  }
*/