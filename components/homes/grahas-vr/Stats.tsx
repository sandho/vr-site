import Counter from "@/components/common/Counter";

const stats = [
  {
    number: 120,
    suffix: "+",
    label: "Enterprise\nUsers",
    counterId: "stat-users",
  },
  {
    number: 40,
    suffix: "%",
    label: "Faster\nTraining",
    counterId: "stat-training",
  },
  {
    number: 10,
    suffix: "+",
    label: "Industries\nServed",
    counterId: "stat-industries",
  },
];

export default function Stats() {
  return (
    <div className="mxd-section padding-default">
      <div className="mxd-container grid-container">
        {/* Block - Statistics Cards Start */}
        <div className="mxd-block">
          <div className="mxd-stats-simple">
            <div className="container-fluid p-0">
              <div className="row g-0 mxd-stats-simple">
                {stats.map((stat) => (
                  <div
                    key={stat.counterId}
                    className="col-12 col-lg-4 mxd-stats-simple__item mxd-grid-item"
                  >
                    <div className="mxd-stats-simple__inner animate-card-4">
                      {/* counter */}
                      <div className="mxd-counter">
                        <p
                          id={stat.counterId}
                          className="mxd-stats-number mxd-stats-simple__counter"
                        >
                          <Counter max={stat.number} />
                          {stat.suffix}
                        </p>
                      </div>
                      {/* description */}
                      <p className="mxd-stats-simple__descr t-140 t-bright">
                        {stat.label.split("\n").map((line, i, arr) => (
                          <span key={i}>
                            {line}
                            {i < arr.length - 1 && <br />}
                          </span>
                        ))}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Block - Statistics Cards End */}
      </div>
    </div>
  );
}
