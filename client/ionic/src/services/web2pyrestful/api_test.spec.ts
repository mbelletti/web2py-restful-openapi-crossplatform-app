/**
 * Web2py marketplace demo
 * Web2py marketplace demo
 *
 * OpenAPI spec version: 0.0.1
 * Contact: Mark Graves <mark@myire.com>
 *
 * NOTE: This file is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the file manually.
 */

import * as api from "./api"
import { Configuration } from "./configuration"

const config: Configuration = {}

describe("DefaultApi", () => {
  let instance: api.DefaultApi
  beforeEach(function() {
    instance = new api.DefaultApi(config)
  });

  test("deleteinventoryItem", () => {
    const body: ModelObject = undefined
    return expect(instance.deleteinventoryItem(body, {})).resolves.toBe(null)
  })
  test("deletepurchaseOrder", () => {
    const body: ModelObject = undefined
    return expect(instance.deletepurchaseOrder(body, {})).resolves.toBe(null)
  })
  test("getEntityById", () => {
    const entityName: string = "entityName_example"
    const entityId: string = "entityId_example"
    return expect(instance.getEntityById(entityName, entityId, {})).resolves.toBe(null)
  })
  test("getEntityDetails", () => {
    const entityName: string = "entityName_example"
    const entityId: string = "entityId_example"
    return expect(instance.getEntityDetails(entityName, entityId, {})).resolves.toBe(null)
  })
  test("getEntityIndex", () => {
    const entityName: string = "entityName_example"
    return expect(instance.getEntityIndex(entityName, {})).resolves.toBe(null)
  })
  test("getinventoryItemavailableQuantityInventoryItemAvailableQuantityGeInventoryItemAvailableQuantityLt", () => {
    const inventoryItemAvailableQuantityGe: string = "inventoryItemAvailableQuantityGe_example"
    const inventoryItemAvailableQuantityLt: string = "inventoryItemAvailableQuantityLt_example"
    return expect(instance.getinventoryItemavailableQuantityInventoryItemAvailableQuantityGeInventoryItemAvailableQuantityLt(inventoryItemAvailableQuantityGe, inventoryItemAvailableQuantityLt, {})).resolves.toBe(null)
  })
  test("getinventoryItemavailableQuantityInventoryItemAvailableQuantityGeInventoryItemAvailableQuantityLtfield", () => {
    const inventoryItemAvailableQuantityGe: string = "inventoryItemAvailableQuantityGe_example"
    const inventoryItemAvailableQuantityLt: string = "inventoryItemAvailableQuantityLt_example"
    const field: string = "field_example"
    return expect(instance.getinventoryItemavailableQuantityInventoryItemAvailableQuantityGeInventoryItemAvailableQuantityLtfield(inventoryItemAvailableQuantityGe, inventoryItemAvailableQuantityLt, field, {})).resolves.toBe(null)
  })
  test("getinventoryItemidInventoryItemId", () => {
    const inventoryItemId: string = "inventoryItemId_example"
    return expect(instance.getinventoryItemidInventoryItemId(inventoryItemId, {})).resolves.toBe(null)
  })
  test("getinventoryItemidInventoryItemIdfield", () => {
    const inventoryItemId: string = "inventoryItemId_example"
    const field: string = "field_example"
    return expect(instance.getinventoryItemidInventoryItemIdfield(inventoryItemId, field, {})).resolves.toBe(null)
  })
  test("getinventoryItemidSellerInventoryItemIdSeller", () => {
    const inventoryItemIdSeller: string = "inventoryItemIdSeller_example"
    return expect(instance.getinventoryItemidSellerInventoryItemIdSeller(inventoryItemIdSeller, {})).resolves.toBe(null)
  })
  test("getinventoryItemidSellerInventoryItemIdSellerfield", () => {
    const inventoryItemIdSeller: string = "inventoryItemIdSeller_example"
    const field: string = "field_example"
    return expect(instance.getinventoryItemidSellerInventoryItemIdSellerfield(inventoryItemIdSeller, field, {})).resolves.toBe(null)
  })
  test("getinventoryItemtagsInventoryItemTagsContains", () => {
    const inventoryItemTagsContains: string = "inventoryItemTagsContains_example"
    return expect(instance.getinventoryItemtagsInventoryItemTagsContains(inventoryItemTagsContains, {})).resolves.toBe(null)
  })
  test("getinventoryItemtagsInventoryItemTagsContainsfield", () => {
    const inventoryItemTagsContains: string = "inventoryItemTagsContains_example"
    const field: string = "field_example"
    return expect(instance.getinventoryItemtagsInventoryItemTagsContainsfield(inventoryItemTagsContains, field, {})).resolves.toBe(null)
  })
  test("getpurchaseOrderidPurchaseOrderId", () => {
    const purchaseOrderId: string = "purchaseOrderId_example"
    return expect(instance.getpurchaseOrderidPurchaseOrderId(purchaseOrderId, {})).resolves.toBe(null)
  })
  test("getpurchaseOrderidPurchaseOrderIdfield", () => {
    const purchaseOrderId: string = "purchaseOrderId_example"
    const field: string = "field_example"
    return expect(instance.getpurchaseOrderidPurchaseOrderIdfield(purchaseOrderId, field, {})).resolves.toBe(null)
  })
  test("getpurchaseOrderinventoryItemsPurchaseOrderInventoryItemsContains", () => {
    const purchaseOrderInventoryItemsContains: string = "purchaseOrderInventoryItemsContains_example"
    return expect(instance.getpurchaseOrderinventoryItemsPurchaseOrderInventoryItemsContains(purchaseOrderInventoryItemsContains, {})).resolves.toBe(null)
  })
  test("getpurchaseOrderinventoryItemsPurchaseOrderInventoryItemsContainsfield", () => {
    const purchaseOrderInventoryItemsContains: string = "purchaseOrderInventoryItemsContains_example"
    const field: string = "field_example"
    return expect(instance.getpurchaseOrderinventoryItemsPurchaseOrderInventoryItemsContainsfield(purchaseOrderInventoryItemsContains, field, {})).resolves.toBe(null)
  })
  test("postinventoryItem", () => {
    const body: ModelObject = undefined
    return expect(instance.postinventoryItem(body, {})).resolves.toBe(null)
  })
  test("postpurchaseOrder", () => {
    const body: ModelObject = undefined
    return expect(instance.postpurchaseOrder(body, {})).resolves.toBe(null)
  })
  test("putinventoryItem", () => {
    const body: ModelObject = undefined
    return expect(instance.putinventoryItem(body, {})).resolves.toBe(null)
  })
  test("putpurchaseOrder", () => {
    const body: ModelObject = undefined
    return expect(instance.putpurchaseOrder(body, {})).resolves.toBe(null)
  })
})
