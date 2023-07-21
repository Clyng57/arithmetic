
import type ByteView from 'byteview'

declare module 'byte-encoder'

declare class ByteEncoderIterator {
  #string: string
  #units: number
  #max: number
  #index: number
  #component: Array<*>
  #leadSurrogate: null | number
  #codePoint: null | number
  #componentError: [0xEF, 0xBF, 0xBD]
  #read: number
  #written: number

  constructor (string: string, units?: number)

  get [Symbol.toStringTag] () {
    return 'ByteEncoder'
  }

  get read (): number
  get written (): number

  * [Symbol.iterator] (): Generator<number, void, undefined>
}

export default class ByteEncoder {
  #encoding: string

  static Iterator = ByteEncoderIterator

  constructor ()

  get encoding (): string

  encode (string: string): ByteView

  encodeInto (
    string: string,
    byteView: ByteView | Buffer | ArrayBufferView
  ): { read: number, written: number }
}
