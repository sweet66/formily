import { createContext } from 'react'
import { Schema } from './schema'
import { ISchemaFormRegistry } from '../types'

export const FormComponentsContext = createContext<ISchemaFormRegistry>(null)

export const FormExpressionScopeContext = createContext<any>({})

export default createContext<Schema>(null)
