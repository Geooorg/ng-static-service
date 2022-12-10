## Project setup
```
npm install
npm run serve

npm run test
npm run build
```

```
npm run lint
```

### Docker related stuff


    docker run --network nats-network --rm -it natsio/nats-box

    nats pub -s "nats://nats:4222" warningMessage.received.sender-service.central '{"hi":"wo!? Hier"}'