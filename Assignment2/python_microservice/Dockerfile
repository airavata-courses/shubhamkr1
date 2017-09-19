FROM python:3.4-alpine
ADD . /python
WORKDIR /python
RUN pip install -r required.txt
EXPOSE 5
CMD ["python", "hello.py"]