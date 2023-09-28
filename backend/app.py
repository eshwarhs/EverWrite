from flask import Flask
from flask_cors import CORS
from prometheus_flask_exporter import PrometheusMetrics

import routes.general
import routes.user
import routes.notes

app = Flask(__name__)
cors = CORS(app)


routes.general.load(app)
routes.user.load(app)
routes.notes.load(app)

metrics = PrometheusMetrics(app)

if __name__ == "__main__":
    app.run("0.0.0.0", 4567, threaded=True)
