import { PositionComponent } from '../../../../shared/component/PositionComponent.js'
import { RotationComponent } from '../../../../shared/component/RotationComponent.js'

import { Entity } from '../../../../shared/entity/Entity.js'
import { SerializedEntityType } from '../../../../shared/network/server/serialized.js'

import { ColorComponent } from '../../../../shared/component/ColorComponent.js'
import { SizeComponent } from '../../../../shared/component/SizeComponent.js'
import { EntityManager } from '../../../../shared/system/EntityManager.js'
import { NetworkDataComponent } from '../../../../shared/network/NetworkDataComponent.js'
import { BoxColliderComponent } from '../component/physics/BoxColliderComponent.js'
import { DynamicRigidBodyComponent } from '../component/physics/DynamicRigidBodyComponent.js'

export class Cube {
  entity: Entity

  constructor(x: number, y: number, z: number, width: number, height: number, depth: number) {
    this.entity = EntityManager.createEntity(SerializedEntityType.CUBE)

    // Adding a PositionComponent with initial position
    const positionComponent = new PositionComponent(this.entity.id, x, y, z)
    this.entity.addComponent(positionComponent)

    const rotationComponent = new RotationComponent(this.entity.id, 0, 0, 0, 0)
    this.entity.addComponent(rotationComponent)

    const sizeComponent = new SizeComponent(this.entity.id, width, height, depth)
    this.entity.addComponent(sizeComponent)

    const colorComponent = new ColorComponent(this.entity.id, '#ff0000')
    this.entity.addComponent(colorComponent)

    this.entity.addComponent(new BoxColliderComponent(this.entity.id))
    this.entity.addComponent(new DynamicRigidBodyComponent(this.entity.id))

    const networkDataComponent = new NetworkDataComponent(this.entity.id, this.entity.type, [
      positionComponent,
      rotationComponent,
      sizeComponent,
      colorComponent,
    ])
    this.entity.addComponent(networkDataComponent)
  }
}
