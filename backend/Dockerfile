FROM python:3.10-slim-buster

WORKDIR /backend

COPY requirements.txt requirements.txt
RUN pip3 install -r requirements.txt

COPY . .

EXPOSE ${PORT}

ENV PYTHONUNBUFFERED=1

CMD python app.py
