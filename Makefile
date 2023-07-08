
# run dev enveronment
# คำสั่งให้เริ่มต้นทำงานใน development โหมด
dev: 
	npm run dev

# docker run build for build this project image 
# คำสั่งหรับสร้าง docker image 
dockerbuild:
	docker build -t ecosyn/cars:lates .

# docker run image and publish on port 3000
# คำสั่งสำหรับให้ docker run image ที่ได้สร้างขึ้นมาด้วยคำสั่งด้านบน
dockerrun:
	docker run --publish 3000:3000 docker.io/ecosyn/cars:latest
	