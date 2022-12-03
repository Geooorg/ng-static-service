image:
	docker build -t ng-static-service:1.0.0 .

run:
	docker run -p 1042:80 ng-static-service:1.0.0