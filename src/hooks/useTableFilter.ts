import { useState, useEffect } from 'react'

export type Options = 'nyap' | 'esDesarrollador' | 'descripcion' | 'area'
export interface TablesOptions {
  nyap: boolean
  descripcion: boolean
  esDesarrollador: boolean
  area: boolean
  nombre: boolean
  dni: boolean
}
export const useTableFilter = (columns: any) => {
  const [filteredColumns, setFilteredColumns] = useState<any[]>([])
  const [optionsActive, setOptionsActive] = useState<TablesOptions>({
    nyap: true,
    descripcion: false,
    esDesarrollador: false,
    nombre: true,
    area: false,
    dni: true,
  })

  useEffect(() => {
    setColumns()
  }, [])

  const handleFilter = (option: Options) => {
    optionsActive[option] = !optionsActive[option]
    setOptionsActive({ ...optionsActive })
    setColumns()
  }

  const setColumns = () => {
    const newColumns: any[] = []

    columns.forEach((element: any) => {
      for (const key in optionsActive) {
        if (
          element.field === key &&
          optionsActive[key as keyof TablesOptions]
        ) {
          newColumns.push(element)
        }
      }
    })
    setFilteredColumns(newColumns)
  }

  return {
    filteredColumns,
    handleFilter,
    optionsActive,
  }
}
