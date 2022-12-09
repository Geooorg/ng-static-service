

export default interface StationList {
    receivers: Station[]
}

export interface Station {
    id: string
    name?: string
    hosts: Host []
}

interface Host {
    hostname: string
    port: string
}