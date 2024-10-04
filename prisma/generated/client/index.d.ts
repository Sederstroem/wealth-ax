
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model account_details
 * 
 */
export type account_details = $Result.DefaultSelection<Prisma.$account_detailsPayload>
/**
 * Model accounts
 * 
 */
export type accounts = $Result.DefaultSelection<Prisma.$accountsPayload>
/**
 * Model balances
 * 
 */
export type balances = $Result.DefaultSelection<Prisma.$balancesPayload>
/**
 * Model servicers
 * 
 */
export type servicers = $Result.DefaultSelection<Prisma.$servicersPayload>
/**
 * Model transactions
 * 
 */
export type transactions = $Result.DefaultSelection<Prisma.$transactionsPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Account_details
 * const account_details = await prisma.account_details.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Account_details
   * const account_details = await prisma.account_details.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.account_details`: Exposes CRUD operations for the **account_details** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Account_details
    * const account_details = await prisma.account_details.findMany()
    * ```
    */
  get account_details(): Prisma.account_detailsDelegate<ExtArgs>;

  /**
   * `prisma.accounts`: Exposes CRUD operations for the **accounts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.accounts.findMany()
    * ```
    */
  get accounts(): Prisma.accountsDelegate<ExtArgs>;

  /**
   * `prisma.balances`: Exposes CRUD operations for the **balances** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Balances
    * const balances = await prisma.balances.findMany()
    * ```
    */
  get balances(): Prisma.balancesDelegate<ExtArgs>;

  /**
   * `prisma.servicers`: Exposes CRUD operations for the **servicers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Servicers
    * const servicers = await prisma.servicers.findMany()
    * ```
    */
  get servicers(): Prisma.servicersDelegate<ExtArgs>;

  /**
   * `prisma.transactions`: Exposes CRUD operations for the **transactions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transactions
    * const transactions = await prisma.transactions.findMany()
    * ```
    */
  get transactions(): Prisma.transactionsDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.20.0
   * Query Engine version: 06fc58a368dc7be9fbbbe894adf8d445d208c284
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    account_details: 'account_details',
    accounts: 'accounts',
    balances: 'balances',
    servicers: 'servicers',
    transactions: 'transactions'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "account_details" | "accounts" | "balances" | "servicers" | "transactions"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      account_details: {
        payload: Prisma.$account_detailsPayload<ExtArgs>
        fields: Prisma.account_detailsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.account_detailsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$account_detailsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.account_detailsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$account_detailsPayload>
          }
          findFirst: {
            args: Prisma.account_detailsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$account_detailsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.account_detailsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$account_detailsPayload>
          }
          findMany: {
            args: Prisma.account_detailsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$account_detailsPayload>[]
          }
          create: {
            args: Prisma.account_detailsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$account_detailsPayload>
          }
          createMany: {
            args: Prisma.account_detailsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.account_detailsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$account_detailsPayload>[]
          }
          delete: {
            args: Prisma.account_detailsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$account_detailsPayload>
          }
          update: {
            args: Prisma.account_detailsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$account_detailsPayload>
          }
          deleteMany: {
            args: Prisma.account_detailsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.account_detailsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.account_detailsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$account_detailsPayload>
          }
          aggregate: {
            args: Prisma.Account_detailsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount_details>
          }
          groupBy: {
            args: Prisma.account_detailsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Account_detailsGroupByOutputType>[]
          }
          count: {
            args: Prisma.account_detailsCountArgs<ExtArgs>
            result: $Utils.Optional<Account_detailsCountAggregateOutputType> | number
          }
        }
      }
      accounts: {
        payload: Prisma.$accountsPayload<ExtArgs>
        fields: Prisma.accountsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.accountsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.accountsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountsPayload>
          }
          findFirst: {
            args: Prisma.accountsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.accountsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountsPayload>
          }
          findMany: {
            args: Prisma.accountsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountsPayload>[]
          }
          create: {
            args: Prisma.accountsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountsPayload>
          }
          createMany: {
            args: Prisma.accountsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.accountsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountsPayload>[]
          }
          delete: {
            args: Prisma.accountsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountsPayload>
          }
          update: {
            args: Prisma.accountsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountsPayload>
          }
          deleteMany: {
            args: Prisma.accountsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.accountsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.accountsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountsPayload>
          }
          aggregate: {
            args: Prisma.AccountsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccounts>
          }
          groupBy: {
            args: Prisma.accountsGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountsGroupByOutputType>[]
          }
          count: {
            args: Prisma.accountsCountArgs<ExtArgs>
            result: $Utils.Optional<AccountsCountAggregateOutputType> | number
          }
        }
      }
      balances: {
        payload: Prisma.$balancesPayload<ExtArgs>
        fields: Prisma.balancesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.balancesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$balancesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.balancesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$balancesPayload>
          }
          findFirst: {
            args: Prisma.balancesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$balancesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.balancesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$balancesPayload>
          }
          findMany: {
            args: Prisma.balancesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$balancesPayload>[]
          }
          create: {
            args: Prisma.balancesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$balancesPayload>
          }
          createMany: {
            args: Prisma.balancesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.balancesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$balancesPayload>[]
          }
          delete: {
            args: Prisma.balancesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$balancesPayload>
          }
          update: {
            args: Prisma.balancesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$balancesPayload>
          }
          deleteMany: {
            args: Prisma.balancesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.balancesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.balancesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$balancesPayload>
          }
          aggregate: {
            args: Prisma.BalancesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBalances>
          }
          groupBy: {
            args: Prisma.balancesGroupByArgs<ExtArgs>
            result: $Utils.Optional<BalancesGroupByOutputType>[]
          }
          count: {
            args: Prisma.balancesCountArgs<ExtArgs>
            result: $Utils.Optional<BalancesCountAggregateOutputType> | number
          }
        }
      }
      servicers: {
        payload: Prisma.$servicersPayload<ExtArgs>
        fields: Prisma.servicersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.servicersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.servicersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicersPayload>
          }
          findFirst: {
            args: Prisma.servicersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.servicersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicersPayload>
          }
          findMany: {
            args: Prisma.servicersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicersPayload>[]
          }
          create: {
            args: Prisma.servicersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicersPayload>
          }
          createMany: {
            args: Prisma.servicersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.servicersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicersPayload>[]
          }
          delete: {
            args: Prisma.servicersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicersPayload>
          }
          update: {
            args: Prisma.servicersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicersPayload>
          }
          deleteMany: {
            args: Prisma.servicersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.servicersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.servicersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicersPayload>
          }
          aggregate: {
            args: Prisma.ServicersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateServicers>
          }
          groupBy: {
            args: Prisma.servicersGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServicersGroupByOutputType>[]
          }
          count: {
            args: Prisma.servicersCountArgs<ExtArgs>
            result: $Utils.Optional<ServicersCountAggregateOutputType> | number
          }
        }
      }
      transactions: {
        payload: Prisma.$transactionsPayload<ExtArgs>
        fields: Prisma.transactionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.transactionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.transactionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionsPayload>
          }
          findFirst: {
            args: Prisma.transactionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.transactionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionsPayload>
          }
          findMany: {
            args: Prisma.transactionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionsPayload>[]
          }
          create: {
            args: Prisma.transactionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionsPayload>
          }
          createMany: {
            args: Prisma.transactionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.transactionsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionsPayload>[]
          }
          delete: {
            args: Prisma.transactionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionsPayload>
          }
          update: {
            args: Prisma.transactionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionsPayload>
          }
          deleteMany: {
            args: Prisma.transactionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.transactionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.transactionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionsPayload>
          }
          aggregate: {
            args: Prisma.TransactionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransactions>
          }
          groupBy: {
            args: Prisma.transactionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransactionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.transactionsCountArgs<ExtArgs>
            result: $Utils.Optional<TransactionsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type AccountsCountOutputType
   */

  export type AccountsCountOutputType = {
    account_details: number
    transactions: number
  }

  export type AccountsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account_details?: boolean | AccountsCountOutputTypeCountAccount_detailsArgs
    transactions?: boolean | AccountsCountOutputTypeCountTransactionsArgs
  }

  // Custom InputTypes
  /**
   * AccountsCountOutputType without action
   */
  export type AccountsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountsCountOutputType
     */
    select?: AccountsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AccountsCountOutputType without action
   */
  export type AccountsCountOutputTypeCountAccount_detailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: account_detailsWhereInput
  }

  /**
   * AccountsCountOutputType without action
   */
  export type AccountsCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: transactionsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model account_details
   */

  export type AggregateAccount_details = {
    _count: Account_detailsCountAggregateOutputType | null
    _min: Account_detailsMinAggregateOutputType | null
    _max: Account_detailsMaxAggregateOutputType | null
  }

  export type Account_detailsMinAggregateOutputType = {
    account_id: string | null
    scheme_name: string | null
    identification: string | null
    name: string | null
    secondary_identification: string | null
  }

  export type Account_detailsMaxAggregateOutputType = {
    account_id: string | null
    scheme_name: string | null
    identification: string | null
    name: string | null
    secondary_identification: string | null
  }

  export type Account_detailsCountAggregateOutputType = {
    account_id: number
    scheme_name: number
    identification: number
    name: number
    secondary_identification: number
    _all: number
  }


  export type Account_detailsMinAggregateInputType = {
    account_id?: true
    scheme_name?: true
    identification?: true
    name?: true
    secondary_identification?: true
  }

  export type Account_detailsMaxAggregateInputType = {
    account_id?: true
    scheme_name?: true
    identification?: true
    name?: true
    secondary_identification?: true
  }

  export type Account_detailsCountAggregateInputType = {
    account_id?: true
    scheme_name?: true
    identification?: true
    name?: true
    secondary_identification?: true
    _all?: true
  }

  export type Account_detailsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which account_details to aggregate.
     */
    where?: account_detailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of account_details to fetch.
     */
    orderBy?: account_detailsOrderByWithRelationInput | account_detailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: account_detailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` account_details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` account_details.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned account_details
    **/
    _count?: true | Account_detailsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Account_detailsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Account_detailsMaxAggregateInputType
  }

  export type GetAccount_detailsAggregateType<T extends Account_detailsAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount_details]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount_details[P]>
      : GetScalarType<T[P], AggregateAccount_details[P]>
  }




  export type account_detailsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: account_detailsWhereInput
    orderBy?: account_detailsOrderByWithAggregationInput | account_detailsOrderByWithAggregationInput[]
    by: Account_detailsScalarFieldEnum[] | Account_detailsScalarFieldEnum
    having?: account_detailsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Account_detailsCountAggregateInputType | true
    _min?: Account_detailsMinAggregateInputType
    _max?: Account_detailsMaxAggregateInputType
  }

  export type Account_detailsGroupByOutputType = {
    account_id: string
    scheme_name: string | null
    identification: string
    name: string | null
    secondary_identification: string | null
    _count: Account_detailsCountAggregateOutputType | null
    _min: Account_detailsMinAggregateOutputType | null
    _max: Account_detailsMaxAggregateOutputType | null
  }

  type GetAccount_detailsGroupByPayload<T extends account_detailsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Account_detailsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Account_detailsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Account_detailsGroupByOutputType[P]>
            : GetScalarType<T[P], Account_detailsGroupByOutputType[P]>
        }
      >
    >


  export type account_detailsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    account_id?: boolean
    scheme_name?: boolean
    identification?: boolean
    name?: boolean
    secondary_identification?: boolean
    accounts?: boolean | accountsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account_details"]>

  export type account_detailsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    account_id?: boolean
    scheme_name?: boolean
    identification?: boolean
    name?: boolean
    secondary_identification?: boolean
    accounts?: boolean | accountsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account_details"]>

  export type account_detailsSelectScalar = {
    account_id?: boolean
    scheme_name?: boolean
    identification?: boolean
    name?: boolean
    secondary_identification?: boolean
  }

  export type account_detailsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | accountsDefaultArgs<ExtArgs>
  }
  export type account_detailsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | accountsDefaultArgs<ExtArgs>
  }

  export type $account_detailsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "account_details"
    objects: {
      accounts: Prisma.$accountsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      account_id: string
      scheme_name: string | null
      identification: string
      name: string | null
      secondary_identification: string | null
    }, ExtArgs["result"]["account_details"]>
    composites: {}
  }

  type account_detailsGetPayload<S extends boolean | null | undefined | account_detailsDefaultArgs> = $Result.GetResult<Prisma.$account_detailsPayload, S>

  type account_detailsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<account_detailsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Account_detailsCountAggregateInputType | true
    }

  export interface account_detailsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['account_details'], meta: { name: 'account_details' } }
    /**
     * Find zero or one Account_details that matches the filter.
     * @param {account_detailsFindUniqueArgs} args - Arguments to find a Account_details
     * @example
     * // Get one Account_details
     * const account_details = await prisma.account_details.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends account_detailsFindUniqueArgs>(args: SelectSubset<T, account_detailsFindUniqueArgs<ExtArgs>>): Prisma__account_detailsClient<$Result.GetResult<Prisma.$account_detailsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Account_details that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {account_detailsFindUniqueOrThrowArgs} args - Arguments to find a Account_details
     * @example
     * // Get one Account_details
     * const account_details = await prisma.account_details.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends account_detailsFindUniqueOrThrowArgs>(args: SelectSubset<T, account_detailsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__account_detailsClient<$Result.GetResult<Prisma.$account_detailsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Account_details that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {account_detailsFindFirstArgs} args - Arguments to find a Account_details
     * @example
     * // Get one Account_details
     * const account_details = await prisma.account_details.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends account_detailsFindFirstArgs>(args?: SelectSubset<T, account_detailsFindFirstArgs<ExtArgs>>): Prisma__account_detailsClient<$Result.GetResult<Prisma.$account_detailsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Account_details that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {account_detailsFindFirstOrThrowArgs} args - Arguments to find a Account_details
     * @example
     * // Get one Account_details
     * const account_details = await prisma.account_details.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends account_detailsFindFirstOrThrowArgs>(args?: SelectSubset<T, account_detailsFindFirstOrThrowArgs<ExtArgs>>): Prisma__account_detailsClient<$Result.GetResult<Prisma.$account_detailsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Account_details that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {account_detailsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Account_details
     * const account_details = await prisma.account_details.findMany()
     * 
     * // Get first 10 Account_details
     * const account_details = await prisma.account_details.findMany({ take: 10 })
     * 
     * // Only select the `account_id`
     * const account_detailsWithAccount_idOnly = await prisma.account_details.findMany({ select: { account_id: true } })
     * 
     */
    findMany<T extends account_detailsFindManyArgs>(args?: SelectSubset<T, account_detailsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$account_detailsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Account_details.
     * @param {account_detailsCreateArgs} args - Arguments to create a Account_details.
     * @example
     * // Create one Account_details
     * const Account_details = await prisma.account_details.create({
     *   data: {
     *     // ... data to create a Account_details
     *   }
     * })
     * 
     */
    create<T extends account_detailsCreateArgs>(args: SelectSubset<T, account_detailsCreateArgs<ExtArgs>>): Prisma__account_detailsClient<$Result.GetResult<Prisma.$account_detailsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Account_details.
     * @param {account_detailsCreateManyArgs} args - Arguments to create many Account_details.
     * @example
     * // Create many Account_details
     * const account_details = await prisma.account_details.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends account_detailsCreateManyArgs>(args?: SelectSubset<T, account_detailsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Account_details and returns the data saved in the database.
     * @param {account_detailsCreateManyAndReturnArgs} args - Arguments to create many Account_details.
     * @example
     * // Create many Account_details
     * const account_details = await prisma.account_details.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Account_details and only return the `account_id`
     * const account_detailsWithAccount_idOnly = await prisma.account_details.createManyAndReturn({ 
     *   select: { account_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends account_detailsCreateManyAndReturnArgs>(args?: SelectSubset<T, account_detailsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$account_detailsPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Account_details.
     * @param {account_detailsDeleteArgs} args - Arguments to delete one Account_details.
     * @example
     * // Delete one Account_details
     * const Account_details = await prisma.account_details.delete({
     *   where: {
     *     // ... filter to delete one Account_details
     *   }
     * })
     * 
     */
    delete<T extends account_detailsDeleteArgs>(args: SelectSubset<T, account_detailsDeleteArgs<ExtArgs>>): Prisma__account_detailsClient<$Result.GetResult<Prisma.$account_detailsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Account_details.
     * @param {account_detailsUpdateArgs} args - Arguments to update one Account_details.
     * @example
     * // Update one Account_details
     * const account_details = await prisma.account_details.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends account_detailsUpdateArgs>(args: SelectSubset<T, account_detailsUpdateArgs<ExtArgs>>): Prisma__account_detailsClient<$Result.GetResult<Prisma.$account_detailsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Account_details.
     * @param {account_detailsDeleteManyArgs} args - Arguments to filter Account_details to delete.
     * @example
     * // Delete a few Account_details
     * const { count } = await prisma.account_details.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends account_detailsDeleteManyArgs>(args?: SelectSubset<T, account_detailsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Account_details.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {account_detailsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Account_details
     * const account_details = await prisma.account_details.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends account_detailsUpdateManyArgs>(args: SelectSubset<T, account_detailsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Account_details.
     * @param {account_detailsUpsertArgs} args - Arguments to update or create a Account_details.
     * @example
     * // Update or create a Account_details
     * const account_details = await prisma.account_details.upsert({
     *   create: {
     *     // ... data to create a Account_details
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account_details we want to update
     *   }
     * })
     */
    upsert<T extends account_detailsUpsertArgs>(args: SelectSubset<T, account_detailsUpsertArgs<ExtArgs>>): Prisma__account_detailsClient<$Result.GetResult<Prisma.$account_detailsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Account_details.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {account_detailsCountArgs} args - Arguments to filter Account_details to count.
     * @example
     * // Count the number of Account_details
     * const count = await prisma.account_details.count({
     *   where: {
     *     // ... the filter for the Account_details we want to count
     *   }
     * })
    **/
    count<T extends account_detailsCountArgs>(
      args?: Subset<T, account_detailsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Account_detailsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account_details.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Account_detailsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Account_detailsAggregateArgs>(args: Subset<T, Account_detailsAggregateArgs>): Prisma.PrismaPromise<GetAccount_detailsAggregateType<T>>

    /**
     * Group by Account_details.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {account_detailsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends account_detailsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: account_detailsGroupByArgs['orderBy'] }
        : { orderBy?: account_detailsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, account_detailsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccount_detailsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the account_details model
   */
  readonly fields: account_detailsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for account_details.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__account_detailsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    accounts<T extends accountsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, accountsDefaultArgs<ExtArgs>>): Prisma__accountsClient<$Result.GetResult<Prisma.$accountsPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the account_details model
   */ 
  interface account_detailsFieldRefs {
    readonly account_id: FieldRef<"account_details", 'String'>
    readonly scheme_name: FieldRef<"account_details", 'String'>
    readonly identification: FieldRef<"account_details", 'String'>
    readonly name: FieldRef<"account_details", 'String'>
    readonly secondary_identification: FieldRef<"account_details", 'String'>
  }
    

  // Custom InputTypes
  /**
   * account_details findUnique
   */
  export type account_detailsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the account_details
     */
    select?: account_detailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: account_detailsInclude<ExtArgs> | null
    /**
     * Filter, which account_details to fetch.
     */
    where: account_detailsWhereUniqueInput
  }

  /**
   * account_details findUniqueOrThrow
   */
  export type account_detailsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the account_details
     */
    select?: account_detailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: account_detailsInclude<ExtArgs> | null
    /**
     * Filter, which account_details to fetch.
     */
    where: account_detailsWhereUniqueInput
  }

  /**
   * account_details findFirst
   */
  export type account_detailsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the account_details
     */
    select?: account_detailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: account_detailsInclude<ExtArgs> | null
    /**
     * Filter, which account_details to fetch.
     */
    where?: account_detailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of account_details to fetch.
     */
    orderBy?: account_detailsOrderByWithRelationInput | account_detailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for account_details.
     */
    cursor?: account_detailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` account_details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` account_details.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of account_details.
     */
    distinct?: Account_detailsScalarFieldEnum | Account_detailsScalarFieldEnum[]
  }

  /**
   * account_details findFirstOrThrow
   */
  export type account_detailsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the account_details
     */
    select?: account_detailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: account_detailsInclude<ExtArgs> | null
    /**
     * Filter, which account_details to fetch.
     */
    where?: account_detailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of account_details to fetch.
     */
    orderBy?: account_detailsOrderByWithRelationInput | account_detailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for account_details.
     */
    cursor?: account_detailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` account_details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` account_details.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of account_details.
     */
    distinct?: Account_detailsScalarFieldEnum | Account_detailsScalarFieldEnum[]
  }

  /**
   * account_details findMany
   */
  export type account_detailsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the account_details
     */
    select?: account_detailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: account_detailsInclude<ExtArgs> | null
    /**
     * Filter, which account_details to fetch.
     */
    where?: account_detailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of account_details to fetch.
     */
    orderBy?: account_detailsOrderByWithRelationInput | account_detailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing account_details.
     */
    cursor?: account_detailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` account_details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` account_details.
     */
    skip?: number
    distinct?: Account_detailsScalarFieldEnum | Account_detailsScalarFieldEnum[]
  }

  /**
   * account_details create
   */
  export type account_detailsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the account_details
     */
    select?: account_detailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: account_detailsInclude<ExtArgs> | null
    /**
     * The data needed to create a account_details.
     */
    data: XOR<account_detailsCreateInput, account_detailsUncheckedCreateInput>
  }

  /**
   * account_details createMany
   */
  export type account_detailsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many account_details.
     */
    data: account_detailsCreateManyInput | account_detailsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * account_details createManyAndReturn
   */
  export type account_detailsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the account_details
     */
    select?: account_detailsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many account_details.
     */
    data: account_detailsCreateManyInput | account_detailsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: account_detailsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * account_details update
   */
  export type account_detailsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the account_details
     */
    select?: account_detailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: account_detailsInclude<ExtArgs> | null
    /**
     * The data needed to update a account_details.
     */
    data: XOR<account_detailsUpdateInput, account_detailsUncheckedUpdateInput>
    /**
     * Choose, which account_details to update.
     */
    where: account_detailsWhereUniqueInput
  }

  /**
   * account_details updateMany
   */
  export type account_detailsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update account_details.
     */
    data: XOR<account_detailsUpdateManyMutationInput, account_detailsUncheckedUpdateManyInput>
    /**
     * Filter which account_details to update
     */
    where?: account_detailsWhereInput
  }

  /**
   * account_details upsert
   */
  export type account_detailsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the account_details
     */
    select?: account_detailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: account_detailsInclude<ExtArgs> | null
    /**
     * The filter to search for the account_details to update in case it exists.
     */
    where: account_detailsWhereUniqueInput
    /**
     * In case the account_details found by the `where` argument doesn't exist, create a new account_details with this data.
     */
    create: XOR<account_detailsCreateInput, account_detailsUncheckedCreateInput>
    /**
     * In case the account_details was found with the provided `where` argument, update it with this data.
     */
    update: XOR<account_detailsUpdateInput, account_detailsUncheckedUpdateInput>
  }

  /**
   * account_details delete
   */
  export type account_detailsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the account_details
     */
    select?: account_detailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: account_detailsInclude<ExtArgs> | null
    /**
     * Filter which account_details to delete.
     */
    where: account_detailsWhereUniqueInput
  }

  /**
   * account_details deleteMany
   */
  export type account_detailsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which account_details to delete
     */
    where?: account_detailsWhereInput
  }

  /**
   * account_details without action
   */
  export type account_detailsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the account_details
     */
    select?: account_detailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: account_detailsInclude<ExtArgs> | null
  }


  /**
   * Model accounts
   */

  export type AggregateAccounts = {
    _count: AccountsCountAggregateOutputType | null
    _min: AccountsMinAggregateOutputType | null
    _max: AccountsMaxAggregateOutputType | null
  }

  export type AccountsMinAggregateOutputType = {
    id: string | null
    status: string | null
    status_update_datetime: Date | null
    currency: string | null
    account_type: string | null
    account_sub_type: string | null
    description: string | null
    nickname: string | null
    opening_date: Date | null
    maturity_date: Date | null
    switch_status: string | null
  }

  export type AccountsMaxAggregateOutputType = {
    id: string | null
    status: string | null
    status_update_datetime: Date | null
    currency: string | null
    account_type: string | null
    account_sub_type: string | null
    description: string | null
    nickname: string | null
    opening_date: Date | null
    maturity_date: Date | null
    switch_status: string | null
  }

  export type AccountsCountAggregateOutputType = {
    id: number
    status: number
    status_update_datetime: number
    currency: number
    account_type: number
    account_sub_type: number
    description: number
    nickname: number
    opening_date: number
    maturity_date: number
    switch_status: number
    _all: number
  }


  export type AccountsMinAggregateInputType = {
    id?: true
    status?: true
    status_update_datetime?: true
    currency?: true
    account_type?: true
    account_sub_type?: true
    description?: true
    nickname?: true
    opening_date?: true
    maturity_date?: true
    switch_status?: true
  }

  export type AccountsMaxAggregateInputType = {
    id?: true
    status?: true
    status_update_datetime?: true
    currency?: true
    account_type?: true
    account_sub_type?: true
    description?: true
    nickname?: true
    opening_date?: true
    maturity_date?: true
    switch_status?: true
  }

  export type AccountsCountAggregateInputType = {
    id?: true
    status?: true
    status_update_datetime?: true
    currency?: true
    account_type?: true
    account_sub_type?: true
    description?: true
    nickname?: true
    opening_date?: true
    maturity_date?: true
    switch_status?: true
    _all?: true
  }

  export type AccountsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which accounts to aggregate.
     */
    where?: accountsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of accounts to fetch.
     */
    orderBy?: accountsOrderByWithRelationInput | accountsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: accountsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned accounts
    **/
    _count?: true | AccountsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountsMaxAggregateInputType
  }

  export type GetAccountsAggregateType<T extends AccountsAggregateArgs> = {
        [P in keyof T & keyof AggregateAccounts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccounts[P]>
      : GetScalarType<T[P], AggregateAccounts[P]>
  }




  export type accountsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: accountsWhereInput
    orderBy?: accountsOrderByWithAggregationInput | accountsOrderByWithAggregationInput[]
    by: AccountsScalarFieldEnum[] | AccountsScalarFieldEnum
    having?: accountsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountsCountAggregateInputType | true
    _min?: AccountsMinAggregateInputType
    _max?: AccountsMaxAggregateInputType
  }

  export type AccountsGroupByOutputType = {
    id: string
    status: string | null
    status_update_datetime: Date | null
    currency: string | null
    account_type: string | null
    account_sub_type: string | null
    description: string | null
    nickname: string | null
    opening_date: Date | null
    maturity_date: Date | null
    switch_status: string | null
    _count: AccountsCountAggregateOutputType | null
    _min: AccountsMinAggregateOutputType | null
    _max: AccountsMaxAggregateOutputType | null
  }

  type GetAccountsGroupByPayload<T extends accountsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountsGroupByOutputType[P]>
            : GetScalarType<T[P], AccountsGroupByOutputType[P]>
        }
      >
    >


  export type accountsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    status_update_datetime?: boolean
    currency?: boolean
    account_type?: boolean
    account_sub_type?: boolean
    description?: boolean
    nickname?: boolean
    opening_date?: boolean
    maturity_date?: boolean
    switch_status?: boolean
    account_details?: boolean | accounts$account_detailsArgs<ExtArgs>
    balances?: boolean | accounts$balancesArgs<ExtArgs>
    servicers?: boolean | accounts$servicersArgs<ExtArgs>
    transactions?: boolean | accounts$transactionsArgs<ExtArgs>
    _count?: boolean | AccountsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["accounts"]>

  export type accountsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    status_update_datetime?: boolean
    currency?: boolean
    account_type?: boolean
    account_sub_type?: boolean
    description?: boolean
    nickname?: boolean
    opening_date?: boolean
    maturity_date?: boolean
    switch_status?: boolean
  }, ExtArgs["result"]["accounts"]>

  export type accountsSelectScalar = {
    id?: boolean
    status?: boolean
    status_update_datetime?: boolean
    currency?: boolean
    account_type?: boolean
    account_sub_type?: boolean
    description?: boolean
    nickname?: boolean
    opening_date?: boolean
    maturity_date?: boolean
    switch_status?: boolean
  }

  export type accountsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account_details?: boolean | accounts$account_detailsArgs<ExtArgs>
    balances?: boolean | accounts$balancesArgs<ExtArgs>
    servicers?: boolean | accounts$servicersArgs<ExtArgs>
    transactions?: boolean | accounts$transactionsArgs<ExtArgs>
    _count?: boolean | AccountsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type accountsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $accountsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "accounts"
    objects: {
      account_details: Prisma.$account_detailsPayload<ExtArgs>[]
      balances: Prisma.$balancesPayload<ExtArgs> | null
      servicers: Prisma.$servicersPayload<ExtArgs> | null
      transactions: Prisma.$transactionsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      status: string | null
      status_update_datetime: Date | null
      currency: string | null
      account_type: string | null
      account_sub_type: string | null
      description: string | null
      nickname: string | null
      opening_date: Date | null
      maturity_date: Date | null
      switch_status: string | null
    }, ExtArgs["result"]["accounts"]>
    composites: {}
  }

  type accountsGetPayload<S extends boolean | null | undefined | accountsDefaultArgs> = $Result.GetResult<Prisma.$accountsPayload, S>

  type accountsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<accountsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AccountsCountAggregateInputType | true
    }

  export interface accountsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['accounts'], meta: { name: 'accounts' } }
    /**
     * Find zero or one Accounts that matches the filter.
     * @param {accountsFindUniqueArgs} args - Arguments to find a Accounts
     * @example
     * // Get one Accounts
     * const accounts = await prisma.accounts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends accountsFindUniqueArgs>(args: SelectSubset<T, accountsFindUniqueArgs<ExtArgs>>): Prisma__accountsClient<$Result.GetResult<Prisma.$accountsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Accounts that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {accountsFindUniqueOrThrowArgs} args - Arguments to find a Accounts
     * @example
     * // Get one Accounts
     * const accounts = await prisma.accounts.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends accountsFindUniqueOrThrowArgs>(args: SelectSubset<T, accountsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__accountsClient<$Result.GetResult<Prisma.$accountsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accountsFindFirstArgs} args - Arguments to find a Accounts
     * @example
     * // Get one Accounts
     * const accounts = await prisma.accounts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends accountsFindFirstArgs>(args?: SelectSubset<T, accountsFindFirstArgs<ExtArgs>>): Prisma__accountsClient<$Result.GetResult<Prisma.$accountsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Accounts that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accountsFindFirstOrThrowArgs} args - Arguments to find a Accounts
     * @example
     * // Get one Accounts
     * const accounts = await prisma.accounts.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends accountsFindFirstOrThrowArgs>(args?: SelectSubset<T, accountsFindFirstOrThrowArgs<ExtArgs>>): Prisma__accountsClient<$Result.GetResult<Prisma.$accountsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accountsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.accounts.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.accounts.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountsWithIdOnly = await prisma.accounts.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends accountsFindManyArgs>(args?: SelectSubset<T, accountsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$accountsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Accounts.
     * @param {accountsCreateArgs} args - Arguments to create a Accounts.
     * @example
     * // Create one Accounts
     * const Accounts = await prisma.accounts.create({
     *   data: {
     *     // ... data to create a Accounts
     *   }
     * })
     * 
     */
    create<T extends accountsCreateArgs>(args: SelectSubset<T, accountsCreateArgs<ExtArgs>>): Prisma__accountsClient<$Result.GetResult<Prisma.$accountsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Accounts.
     * @param {accountsCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const accounts = await prisma.accounts.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends accountsCreateManyArgs>(args?: SelectSubset<T, accountsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {accountsCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const accounts = await prisma.accounts.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `id`
     * const accountsWithIdOnly = await prisma.accounts.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends accountsCreateManyAndReturnArgs>(args?: SelectSubset<T, accountsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$accountsPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Accounts.
     * @param {accountsDeleteArgs} args - Arguments to delete one Accounts.
     * @example
     * // Delete one Accounts
     * const Accounts = await prisma.accounts.delete({
     *   where: {
     *     // ... filter to delete one Accounts
     *   }
     * })
     * 
     */
    delete<T extends accountsDeleteArgs>(args: SelectSubset<T, accountsDeleteArgs<ExtArgs>>): Prisma__accountsClient<$Result.GetResult<Prisma.$accountsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Accounts.
     * @param {accountsUpdateArgs} args - Arguments to update one Accounts.
     * @example
     * // Update one Accounts
     * const accounts = await prisma.accounts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends accountsUpdateArgs>(args: SelectSubset<T, accountsUpdateArgs<ExtArgs>>): Prisma__accountsClient<$Result.GetResult<Prisma.$accountsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Accounts.
     * @param {accountsDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.accounts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends accountsDeleteManyArgs>(args?: SelectSubset<T, accountsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accountsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const accounts = await prisma.accounts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends accountsUpdateManyArgs>(args: SelectSubset<T, accountsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Accounts.
     * @param {accountsUpsertArgs} args - Arguments to update or create a Accounts.
     * @example
     * // Update or create a Accounts
     * const accounts = await prisma.accounts.upsert({
     *   create: {
     *     // ... data to create a Accounts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Accounts we want to update
     *   }
     * })
     */
    upsert<T extends accountsUpsertArgs>(args: SelectSubset<T, accountsUpsertArgs<ExtArgs>>): Prisma__accountsClient<$Result.GetResult<Prisma.$accountsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accountsCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.accounts.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends accountsCountArgs>(
      args?: Subset<T, accountsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccountsAggregateArgs>(args: Subset<T, AccountsAggregateArgs>): Prisma.PrismaPromise<GetAccountsAggregateType<T>>

    /**
     * Group by Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accountsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends accountsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: accountsGroupByArgs['orderBy'] }
        : { orderBy?: accountsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, accountsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the accounts model
   */
  readonly fields: accountsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for accounts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__accountsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    account_details<T extends accounts$account_detailsArgs<ExtArgs> = {}>(args?: Subset<T, accounts$account_detailsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$account_detailsPayload<ExtArgs>, T, "findMany"> | Null>
    balances<T extends accounts$balancesArgs<ExtArgs> = {}>(args?: Subset<T, accounts$balancesArgs<ExtArgs>>): Prisma__balancesClient<$Result.GetResult<Prisma.$balancesPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    servicers<T extends accounts$servicersArgs<ExtArgs> = {}>(args?: Subset<T, accounts$servicersArgs<ExtArgs>>): Prisma__servicersClient<$Result.GetResult<Prisma.$servicersPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    transactions<T extends accounts$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, accounts$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the accounts model
   */ 
  interface accountsFieldRefs {
    readonly id: FieldRef<"accounts", 'String'>
    readonly status: FieldRef<"accounts", 'String'>
    readonly status_update_datetime: FieldRef<"accounts", 'DateTime'>
    readonly currency: FieldRef<"accounts", 'String'>
    readonly account_type: FieldRef<"accounts", 'String'>
    readonly account_sub_type: FieldRef<"accounts", 'String'>
    readonly description: FieldRef<"accounts", 'String'>
    readonly nickname: FieldRef<"accounts", 'String'>
    readonly opening_date: FieldRef<"accounts", 'DateTime'>
    readonly maturity_date: FieldRef<"accounts", 'DateTime'>
    readonly switch_status: FieldRef<"accounts", 'String'>
  }
    

  // Custom InputTypes
  /**
   * accounts findUnique
   */
  export type accountsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accounts
     */
    select?: accountsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountsInclude<ExtArgs> | null
    /**
     * Filter, which accounts to fetch.
     */
    where: accountsWhereUniqueInput
  }

  /**
   * accounts findUniqueOrThrow
   */
  export type accountsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accounts
     */
    select?: accountsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountsInclude<ExtArgs> | null
    /**
     * Filter, which accounts to fetch.
     */
    where: accountsWhereUniqueInput
  }

  /**
   * accounts findFirst
   */
  export type accountsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accounts
     */
    select?: accountsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountsInclude<ExtArgs> | null
    /**
     * Filter, which accounts to fetch.
     */
    where?: accountsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of accounts to fetch.
     */
    orderBy?: accountsOrderByWithRelationInput | accountsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for accounts.
     */
    cursor?: accountsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of accounts.
     */
    distinct?: AccountsScalarFieldEnum | AccountsScalarFieldEnum[]
  }

  /**
   * accounts findFirstOrThrow
   */
  export type accountsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accounts
     */
    select?: accountsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountsInclude<ExtArgs> | null
    /**
     * Filter, which accounts to fetch.
     */
    where?: accountsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of accounts to fetch.
     */
    orderBy?: accountsOrderByWithRelationInput | accountsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for accounts.
     */
    cursor?: accountsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of accounts.
     */
    distinct?: AccountsScalarFieldEnum | AccountsScalarFieldEnum[]
  }

  /**
   * accounts findMany
   */
  export type accountsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accounts
     */
    select?: accountsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountsInclude<ExtArgs> | null
    /**
     * Filter, which accounts to fetch.
     */
    where?: accountsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of accounts to fetch.
     */
    orderBy?: accountsOrderByWithRelationInput | accountsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing accounts.
     */
    cursor?: accountsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` accounts.
     */
    skip?: number
    distinct?: AccountsScalarFieldEnum | AccountsScalarFieldEnum[]
  }

  /**
   * accounts create
   */
  export type accountsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accounts
     */
    select?: accountsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountsInclude<ExtArgs> | null
    /**
     * The data needed to create a accounts.
     */
    data: XOR<accountsCreateInput, accountsUncheckedCreateInput>
  }

  /**
   * accounts createMany
   */
  export type accountsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many accounts.
     */
    data: accountsCreateManyInput | accountsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * accounts createManyAndReturn
   */
  export type accountsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accounts
     */
    select?: accountsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many accounts.
     */
    data: accountsCreateManyInput | accountsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * accounts update
   */
  export type accountsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accounts
     */
    select?: accountsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountsInclude<ExtArgs> | null
    /**
     * The data needed to update a accounts.
     */
    data: XOR<accountsUpdateInput, accountsUncheckedUpdateInput>
    /**
     * Choose, which accounts to update.
     */
    where: accountsWhereUniqueInput
  }

  /**
   * accounts updateMany
   */
  export type accountsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update accounts.
     */
    data: XOR<accountsUpdateManyMutationInput, accountsUncheckedUpdateManyInput>
    /**
     * Filter which accounts to update
     */
    where?: accountsWhereInput
  }

  /**
   * accounts upsert
   */
  export type accountsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accounts
     */
    select?: accountsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountsInclude<ExtArgs> | null
    /**
     * The filter to search for the accounts to update in case it exists.
     */
    where: accountsWhereUniqueInput
    /**
     * In case the accounts found by the `where` argument doesn't exist, create a new accounts with this data.
     */
    create: XOR<accountsCreateInput, accountsUncheckedCreateInput>
    /**
     * In case the accounts was found with the provided `where` argument, update it with this data.
     */
    update: XOR<accountsUpdateInput, accountsUncheckedUpdateInput>
  }

  /**
   * accounts delete
   */
  export type accountsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accounts
     */
    select?: accountsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountsInclude<ExtArgs> | null
    /**
     * Filter which accounts to delete.
     */
    where: accountsWhereUniqueInput
  }

  /**
   * accounts deleteMany
   */
  export type accountsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which accounts to delete
     */
    where?: accountsWhereInput
  }

  /**
   * accounts.account_details
   */
  export type accounts$account_detailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the account_details
     */
    select?: account_detailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: account_detailsInclude<ExtArgs> | null
    where?: account_detailsWhereInput
    orderBy?: account_detailsOrderByWithRelationInput | account_detailsOrderByWithRelationInput[]
    cursor?: account_detailsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Account_detailsScalarFieldEnum | Account_detailsScalarFieldEnum[]
  }

  /**
   * accounts.balances
   */
  export type accounts$balancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the balances
     */
    select?: balancesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: balancesInclude<ExtArgs> | null
    where?: balancesWhereInput
  }

  /**
   * accounts.servicers
   */
  export type accounts$servicersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servicers
     */
    select?: servicersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: servicersInclude<ExtArgs> | null
    where?: servicersWhereInput
  }

  /**
   * accounts.transactions
   */
  export type accounts$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionsInclude<ExtArgs> | null
    where?: transactionsWhereInput
    orderBy?: transactionsOrderByWithRelationInput | transactionsOrderByWithRelationInput[]
    cursor?: transactionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionsScalarFieldEnum | TransactionsScalarFieldEnum[]
  }

  /**
   * accounts without action
   */
  export type accountsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accounts
     */
    select?: accountsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountsInclude<ExtArgs> | null
  }


  /**
   * Model balances
   */

  export type AggregateBalances = {
    _count: BalancesCountAggregateOutputType | null
    _avg: BalancesAvgAggregateOutputType | null
    _sum: BalancesSumAggregateOutputType | null
    _min: BalancesMinAggregateOutputType | null
    _max: BalancesMaxAggregateOutputType | null
  }

  export type BalancesAvgAggregateOutputType = {
    amount_value: Decimal | null
    credit_line_amount_value: Decimal | null
  }

  export type BalancesSumAggregateOutputType = {
    amount_value: Decimal | null
    credit_line_amount_value: Decimal | null
  }

  export type BalancesMinAggregateOutputType = {
    account_id: string | null
    credit_debit_indicator: string | null
    type: string | null
    amount_value: Decimal | null
    amount_currency: string | null
    date_time: Date | null
    credit_line_included: boolean | null
    credit_line_amount_value: Decimal | null
    credit_line_amount_currency: string | null
  }

  export type BalancesMaxAggregateOutputType = {
    account_id: string | null
    credit_debit_indicator: string | null
    type: string | null
    amount_value: Decimal | null
    amount_currency: string | null
    date_time: Date | null
    credit_line_included: boolean | null
    credit_line_amount_value: Decimal | null
    credit_line_amount_currency: string | null
  }

  export type BalancesCountAggregateOutputType = {
    account_id: number
    credit_debit_indicator: number
    type: number
    amount_value: number
    amount_currency: number
    date_time: number
    credit_line_included: number
    credit_line_amount_value: number
    credit_line_amount_currency: number
    _all: number
  }


  export type BalancesAvgAggregateInputType = {
    amount_value?: true
    credit_line_amount_value?: true
  }

  export type BalancesSumAggregateInputType = {
    amount_value?: true
    credit_line_amount_value?: true
  }

  export type BalancesMinAggregateInputType = {
    account_id?: true
    credit_debit_indicator?: true
    type?: true
    amount_value?: true
    amount_currency?: true
    date_time?: true
    credit_line_included?: true
    credit_line_amount_value?: true
    credit_line_amount_currency?: true
  }

  export type BalancesMaxAggregateInputType = {
    account_id?: true
    credit_debit_indicator?: true
    type?: true
    amount_value?: true
    amount_currency?: true
    date_time?: true
    credit_line_included?: true
    credit_line_amount_value?: true
    credit_line_amount_currency?: true
  }

  export type BalancesCountAggregateInputType = {
    account_id?: true
    credit_debit_indicator?: true
    type?: true
    amount_value?: true
    amount_currency?: true
    date_time?: true
    credit_line_included?: true
    credit_line_amount_value?: true
    credit_line_amount_currency?: true
    _all?: true
  }

  export type BalancesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which balances to aggregate.
     */
    where?: balancesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of balances to fetch.
     */
    orderBy?: balancesOrderByWithRelationInput | balancesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: balancesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` balances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` balances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned balances
    **/
    _count?: true | BalancesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BalancesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BalancesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BalancesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BalancesMaxAggregateInputType
  }

  export type GetBalancesAggregateType<T extends BalancesAggregateArgs> = {
        [P in keyof T & keyof AggregateBalances]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBalances[P]>
      : GetScalarType<T[P], AggregateBalances[P]>
  }




  export type balancesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: balancesWhereInput
    orderBy?: balancesOrderByWithAggregationInput | balancesOrderByWithAggregationInput[]
    by: BalancesScalarFieldEnum[] | BalancesScalarFieldEnum
    having?: balancesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BalancesCountAggregateInputType | true
    _avg?: BalancesAvgAggregateInputType
    _sum?: BalancesSumAggregateInputType
    _min?: BalancesMinAggregateInputType
    _max?: BalancesMaxAggregateInputType
  }

  export type BalancesGroupByOutputType = {
    account_id: string
    credit_debit_indicator: string | null
    type: string | null
    amount_value: Decimal | null
    amount_currency: string | null
    date_time: Date | null
    credit_line_included: boolean | null
    credit_line_amount_value: Decimal | null
    credit_line_amount_currency: string | null
    _count: BalancesCountAggregateOutputType | null
    _avg: BalancesAvgAggregateOutputType | null
    _sum: BalancesSumAggregateOutputType | null
    _min: BalancesMinAggregateOutputType | null
    _max: BalancesMaxAggregateOutputType | null
  }

  type GetBalancesGroupByPayload<T extends balancesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BalancesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BalancesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BalancesGroupByOutputType[P]>
            : GetScalarType<T[P], BalancesGroupByOutputType[P]>
        }
      >
    >


  export type balancesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    account_id?: boolean
    credit_debit_indicator?: boolean
    type?: boolean
    amount_value?: boolean
    amount_currency?: boolean
    date_time?: boolean
    credit_line_included?: boolean
    credit_line_amount_value?: boolean
    credit_line_amount_currency?: boolean
    accounts?: boolean | accountsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["balances"]>

  export type balancesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    account_id?: boolean
    credit_debit_indicator?: boolean
    type?: boolean
    amount_value?: boolean
    amount_currency?: boolean
    date_time?: boolean
    credit_line_included?: boolean
    credit_line_amount_value?: boolean
    credit_line_amount_currency?: boolean
    accounts?: boolean | accountsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["balances"]>

  export type balancesSelectScalar = {
    account_id?: boolean
    credit_debit_indicator?: boolean
    type?: boolean
    amount_value?: boolean
    amount_currency?: boolean
    date_time?: boolean
    credit_line_included?: boolean
    credit_line_amount_value?: boolean
    credit_line_amount_currency?: boolean
  }

  export type balancesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | accountsDefaultArgs<ExtArgs>
  }
  export type balancesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | accountsDefaultArgs<ExtArgs>
  }

  export type $balancesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "balances"
    objects: {
      accounts: Prisma.$accountsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      account_id: string
      credit_debit_indicator: string | null
      type: string | null
      amount_value: Prisma.Decimal | null
      amount_currency: string | null
      date_time: Date | null
      credit_line_included: boolean | null
      credit_line_amount_value: Prisma.Decimal | null
      credit_line_amount_currency: string | null
    }, ExtArgs["result"]["balances"]>
    composites: {}
  }

  type balancesGetPayload<S extends boolean | null | undefined | balancesDefaultArgs> = $Result.GetResult<Prisma.$balancesPayload, S>

  type balancesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<balancesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BalancesCountAggregateInputType | true
    }

  export interface balancesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['balances'], meta: { name: 'balances' } }
    /**
     * Find zero or one Balances that matches the filter.
     * @param {balancesFindUniqueArgs} args - Arguments to find a Balances
     * @example
     * // Get one Balances
     * const balances = await prisma.balances.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends balancesFindUniqueArgs>(args: SelectSubset<T, balancesFindUniqueArgs<ExtArgs>>): Prisma__balancesClient<$Result.GetResult<Prisma.$balancesPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Balances that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {balancesFindUniqueOrThrowArgs} args - Arguments to find a Balances
     * @example
     * // Get one Balances
     * const balances = await prisma.balances.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends balancesFindUniqueOrThrowArgs>(args: SelectSubset<T, balancesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__balancesClient<$Result.GetResult<Prisma.$balancesPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Balances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {balancesFindFirstArgs} args - Arguments to find a Balances
     * @example
     * // Get one Balances
     * const balances = await prisma.balances.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends balancesFindFirstArgs>(args?: SelectSubset<T, balancesFindFirstArgs<ExtArgs>>): Prisma__balancesClient<$Result.GetResult<Prisma.$balancesPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Balances that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {balancesFindFirstOrThrowArgs} args - Arguments to find a Balances
     * @example
     * // Get one Balances
     * const balances = await prisma.balances.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends balancesFindFirstOrThrowArgs>(args?: SelectSubset<T, balancesFindFirstOrThrowArgs<ExtArgs>>): Prisma__balancesClient<$Result.GetResult<Prisma.$balancesPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Balances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {balancesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Balances
     * const balances = await prisma.balances.findMany()
     * 
     * // Get first 10 Balances
     * const balances = await prisma.balances.findMany({ take: 10 })
     * 
     * // Only select the `account_id`
     * const balancesWithAccount_idOnly = await prisma.balances.findMany({ select: { account_id: true } })
     * 
     */
    findMany<T extends balancesFindManyArgs>(args?: SelectSubset<T, balancesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$balancesPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Balances.
     * @param {balancesCreateArgs} args - Arguments to create a Balances.
     * @example
     * // Create one Balances
     * const Balances = await prisma.balances.create({
     *   data: {
     *     // ... data to create a Balances
     *   }
     * })
     * 
     */
    create<T extends balancesCreateArgs>(args: SelectSubset<T, balancesCreateArgs<ExtArgs>>): Prisma__balancesClient<$Result.GetResult<Prisma.$balancesPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Balances.
     * @param {balancesCreateManyArgs} args - Arguments to create many Balances.
     * @example
     * // Create many Balances
     * const balances = await prisma.balances.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends balancesCreateManyArgs>(args?: SelectSubset<T, balancesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Balances and returns the data saved in the database.
     * @param {balancesCreateManyAndReturnArgs} args - Arguments to create many Balances.
     * @example
     * // Create many Balances
     * const balances = await prisma.balances.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Balances and only return the `account_id`
     * const balancesWithAccount_idOnly = await prisma.balances.createManyAndReturn({ 
     *   select: { account_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends balancesCreateManyAndReturnArgs>(args?: SelectSubset<T, balancesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$balancesPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Balances.
     * @param {balancesDeleteArgs} args - Arguments to delete one Balances.
     * @example
     * // Delete one Balances
     * const Balances = await prisma.balances.delete({
     *   where: {
     *     // ... filter to delete one Balances
     *   }
     * })
     * 
     */
    delete<T extends balancesDeleteArgs>(args: SelectSubset<T, balancesDeleteArgs<ExtArgs>>): Prisma__balancesClient<$Result.GetResult<Prisma.$balancesPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Balances.
     * @param {balancesUpdateArgs} args - Arguments to update one Balances.
     * @example
     * // Update one Balances
     * const balances = await prisma.balances.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends balancesUpdateArgs>(args: SelectSubset<T, balancesUpdateArgs<ExtArgs>>): Prisma__balancesClient<$Result.GetResult<Prisma.$balancesPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Balances.
     * @param {balancesDeleteManyArgs} args - Arguments to filter Balances to delete.
     * @example
     * // Delete a few Balances
     * const { count } = await prisma.balances.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends balancesDeleteManyArgs>(args?: SelectSubset<T, balancesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Balances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {balancesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Balances
     * const balances = await prisma.balances.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends balancesUpdateManyArgs>(args: SelectSubset<T, balancesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Balances.
     * @param {balancesUpsertArgs} args - Arguments to update or create a Balances.
     * @example
     * // Update or create a Balances
     * const balances = await prisma.balances.upsert({
     *   create: {
     *     // ... data to create a Balances
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Balances we want to update
     *   }
     * })
     */
    upsert<T extends balancesUpsertArgs>(args: SelectSubset<T, balancesUpsertArgs<ExtArgs>>): Prisma__balancesClient<$Result.GetResult<Prisma.$balancesPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Balances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {balancesCountArgs} args - Arguments to filter Balances to count.
     * @example
     * // Count the number of Balances
     * const count = await prisma.balances.count({
     *   where: {
     *     // ... the filter for the Balances we want to count
     *   }
     * })
    **/
    count<T extends balancesCountArgs>(
      args?: Subset<T, balancesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BalancesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Balances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BalancesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BalancesAggregateArgs>(args: Subset<T, BalancesAggregateArgs>): Prisma.PrismaPromise<GetBalancesAggregateType<T>>

    /**
     * Group by Balances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {balancesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends balancesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: balancesGroupByArgs['orderBy'] }
        : { orderBy?: balancesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, balancesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBalancesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the balances model
   */
  readonly fields: balancesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for balances.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__balancesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    accounts<T extends accountsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, accountsDefaultArgs<ExtArgs>>): Prisma__accountsClient<$Result.GetResult<Prisma.$accountsPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the balances model
   */ 
  interface balancesFieldRefs {
    readonly account_id: FieldRef<"balances", 'String'>
    readonly credit_debit_indicator: FieldRef<"balances", 'String'>
    readonly type: FieldRef<"balances", 'String'>
    readonly amount_value: FieldRef<"balances", 'Decimal'>
    readonly amount_currency: FieldRef<"balances", 'String'>
    readonly date_time: FieldRef<"balances", 'DateTime'>
    readonly credit_line_included: FieldRef<"balances", 'Boolean'>
    readonly credit_line_amount_value: FieldRef<"balances", 'Decimal'>
    readonly credit_line_amount_currency: FieldRef<"balances", 'String'>
  }
    

  // Custom InputTypes
  /**
   * balances findUnique
   */
  export type balancesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the balances
     */
    select?: balancesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: balancesInclude<ExtArgs> | null
    /**
     * Filter, which balances to fetch.
     */
    where: balancesWhereUniqueInput
  }

  /**
   * balances findUniqueOrThrow
   */
  export type balancesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the balances
     */
    select?: balancesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: balancesInclude<ExtArgs> | null
    /**
     * Filter, which balances to fetch.
     */
    where: balancesWhereUniqueInput
  }

  /**
   * balances findFirst
   */
  export type balancesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the balances
     */
    select?: balancesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: balancesInclude<ExtArgs> | null
    /**
     * Filter, which balances to fetch.
     */
    where?: balancesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of balances to fetch.
     */
    orderBy?: balancesOrderByWithRelationInput | balancesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for balances.
     */
    cursor?: balancesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` balances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` balances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of balances.
     */
    distinct?: BalancesScalarFieldEnum | BalancesScalarFieldEnum[]
  }

  /**
   * balances findFirstOrThrow
   */
  export type balancesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the balances
     */
    select?: balancesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: balancesInclude<ExtArgs> | null
    /**
     * Filter, which balances to fetch.
     */
    where?: balancesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of balances to fetch.
     */
    orderBy?: balancesOrderByWithRelationInput | balancesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for balances.
     */
    cursor?: balancesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` balances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` balances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of balances.
     */
    distinct?: BalancesScalarFieldEnum | BalancesScalarFieldEnum[]
  }

  /**
   * balances findMany
   */
  export type balancesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the balances
     */
    select?: balancesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: balancesInclude<ExtArgs> | null
    /**
     * Filter, which balances to fetch.
     */
    where?: balancesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of balances to fetch.
     */
    orderBy?: balancesOrderByWithRelationInput | balancesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing balances.
     */
    cursor?: balancesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` balances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` balances.
     */
    skip?: number
    distinct?: BalancesScalarFieldEnum | BalancesScalarFieldEnum[]
  }

  /**
   * balances create
   */
  export type balancesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the balances
     */
    select?: balancesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: balancesInclude<ExtArgs> | null
    /**
     * The data needed to create a balances.
     */
    data: XOR<balancesCreateInput, balancesUncheckedCreateInput>
  }

  /**
   * balances createMany
   */
  export type balancesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many balances.
     */
    data: balancesCreateManyInput | balancesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * balances createManyAndReturn
   */
  export type balancesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the balances
     */
    select?: balancesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many balances.
     */
    data: balancesCreateManyInput | balancesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: balancesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * balances update
   */
  export type balancesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the balances
     */
    select?: balancesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: balancesInclude<ExtArgs> | null
    /**
     * The data needed to update a balances.
     */
    data: XOR<balancesUpdateInput, balancesUncheckedUpdateInput>
    /**
     * Choose, which balances to update.
     */
    where: balancesWhereUniqueInput
  }

  /**
   * balances updateMany
   */
  export type balancesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update balances.
     */
    data: XOR<balancesUpdateManyMutationInput, balancesUncheckedUpdateManyInput>
    /**
     * Filter which balances to update
     */
    where?: balancesWhereInput
  }

  /**
   * balances upsert
   */
  export type balancesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the balances
     */
    select?: balancesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: balancesInclude<ExtArgs> | null
    /**
     * The filter to search for the balances to update in case it exists.
     */
    where: balancesWhereUniqueInput
    /**
     * In case the balances found by the `where` argument doesn't exist, create a new balances with this data.
     */
    create: XOR<balancesCreateInput, balancesUncheckedCreateInput>
    /**
     * In case the balances was found with the provided `where` argument, update it with this data.
     */
    update: XOR<balancesUpdateInput, balancesUncheckedUpdateInput>
  }

  /**
   * balances delete
   */
  export type balancesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the balances
     */
    select?: balancesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: balancesInclude<ExtArgs> | null
    /**
     * Filter which balances to delete.
     */
    where: balancesWhereUniqueInput
  }

  /**
   * balances deleteMany
   */
  export type balancesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which balances to delete
     */
    where?: balancesWhereInput
  }

  /**
   * balances without action
   */
  export type balancesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the balances
     */
    select?: balancesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: balancesInclude<ExtArgs> | null
  }


  /**
   * Model servicers
   */

  export type AggregateServicers = {
    _count: ServicersCountAggregateOutputType | null
    _min: ServicersMinAggregateOutputType | null
    _max: ServicersMaxAggregateOutputType | null
  }

  export type ServicersMinAggregateOutputType = {
    account_id: string | null
    scheme_name: string | null
    identification: string | null
  }

  export type ServicersMaxAggregateOutputType = {
    account_id: string | null
    scheme_name: string | null
    identification: string | null
  }

  export type ServicersCountAggregateOutputType = {
    account_id: number
    scheme_name: number
    identification: number
    _all: number
  }


  export type ServicersMinAggregateInputType = {
    account_id?: true
    scheme_name?: true
    identification?: true
  }

  export type ServicersMaxAggregateInputType = {
    account_id?: true
    scheme_name?: true
    identification?: true
  }

  export type ServicersCountAggregateInputType = {
    account_id?: true
    scheme_name?: true
    identification?: true
    _all?: true
  }

  export type ServicersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which servicers to aggregate.
     */
    where?: servicersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of servicers to fetch.
     */
    orderBy?: servicersOrderByWithRelationInput | servicersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: servicersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` servicers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` servicers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned servicers
    **/
    _count?: true | ServicersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServicersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServicersMaxAggregateInputType
  }

  export type GetServicersAggregateType<T extends ServicersAggregateArgs> = {
        [P in keyof T & keyof AggregateServicers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateServicers[P]>
      : GetScalarType<T[P], AggregateServicers[P]>
  }




  export type servicersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: servicersWhereInput
    orderBy?: servicersOrderByWithAggregationInput | servicersOrderByWithAggregationInput[]
    by: ServicersScalarFieldEnum[] | ServicersScalarFieldEnum
    having?: servicersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServicersCountAggregateInputType | true
    _min?: ServicersMinAggregateInputType
    _max?: ServicersMaxAggregateInputType
  }

  export type ServicersGroupByOutputType = {
    account_id: string
    scheme_name: string | null
    identification: string | null
    _count: ServicersCountAggregateOutputType | null
    _min: ServicersMinAggregateOutputType | null
    _max: ServicersMaxAggregateOutputType | null
  }

  type GetServicersGroupByPayload<T extends servicersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServicersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServicersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServicersGroupByOutputType[P]>
            : GetScalarType<T[P], ServicersGroupByOutputType[P]>
        }
      >
    >


  export type servicersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    account_id?: boolean
    scheme_name?: boolean
    identification?: boolean
    accounts?: boolean | accountsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["servicers"]>

  export type servicersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    account_id?: boolean
    scheme_name?: boolean
    identification?: boolean
    accounts?: boolean | accountsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["servicers"]>

  export type servicersSelectScalar = {
    account_id?: boolean
    scheme_name?: boolean
    identification?: boolean
  }

  export type servicersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | accountsDefaultArgs<ExtArgs>
  }
  export type servicersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | accountsDefaultArgs<ExtArgs>
  }

  export type $servicersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "servicers"
    objects: {
      accounts: Prisma.$accountsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      account_id: string
      scheme_name: string | null
      identification: string | null
    }, ExtArgs["result"]["servicers"]>
    composites: {}
  }

  type servicersGetPayload<S extends boolean | null | undefined | servicersDefaultArgs> = $Result.GetResult<Prisma.$servicersPayload, S>

  type servicersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<servicersFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ServicersCountAggregateInputType | true
    }

  export interface servicersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['servicers'], meta: { name: 'servicers' } }
    /**
     * Find zero or one Servicers that matches the filter.
     * @param {servicersFindUniqueArgs} args - Arguments to find a Servicers
     * @example
     * // Get one Servicers
     * const servicers = await prisma.servicers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends servicersFindUniqueArgs>(args: SelectSubset<T, servicersFindUniqueArgs<ExtArgs>>): Prisma__servicersClient<$Result.GetResult<Prisma.$servicersPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Servicers that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {servicersFindUniqueOrThrowArgs} args - Arguments to find a Servicers
     * @example
     * // Get one Servicers
     * const servicers = await prisma.servicers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends servicersFindUniqueOrThrowArgs>(args: SelectSubset<T, servicersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__servicersClient<$Result.GetResult<Prisma.$servicersPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Servicers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {servicersFindFirstArgs} args - Arguments to find a Servicers
     * @example
     * // Get one Servicers
     * const servicers = await prisma.servicers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends servicersFindFirstArgs>(args?: SelectSubset<T, servicersFindFirstArgs<ExtArgs>>): Prisma__servicersClient<$Result.GetResult<Prisma.$servicersPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Servicers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {servicersFindFirstOrThrowArgs} args - Arguments to find a Servicers
     * @example
     * // Get one Servicers
     * const servicers = await prisma.servicers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends servicersFindFirstOrThrowArgs>(args?: SelectSubset<T, servicersFindFirstOrThrowArgs<ExtArgs>>): Prisma__servicersClient<$Result.GetResult<Prisma.$servicersPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Servicers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {servicersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Servicers
     * const servicers = await prisma.servicers.findMany()
     * 
     * // Get first 10 Servicers
     * const servicers = await prisma.servicers.findMany({ take: 10 })
     * 
     * // Only select the `account_id`
     * const servicersWithAccount_idOnly = await prisma.servicers.findMany({ select: { account_id: true } })
     * 
     */
    findMany<T extends servicersFindManyArgs>(args?: SelectSubset<T, servicersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$servicersPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Servicers.
     * @param {servicersCreateArgs} args - Arguments to create a Servicers.
     * @example
     * // Create one Servicers
     * const Servicers = await prisma.servicers.create({
     *   data: {
     *     // ... data to create a Servicers
     *   }
     * })
     * 
     */
    create<T extends servicersCreateArgs>(args: SelectSubset<T, servicersCreateArgs<ExtArgs>>): Prisma__servicersClient<$Result.GetResult<Prisma.$servicersPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Servicers.
     * @param {servicersCreateManyArgs} args - Arguments to create many Servicers.
     * @example
     * // Create many Servicers
     * const servicers = await prisma.servicers.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends servicersCreateManyArgs>(args?: SelectSubset<T, servicersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Servicers and returns the data saved in the database.
     * @param {servicersCreateManyAndReturnArgs} args - Arguments to create many Servicers.
     * @example
     * // Create many Servicers
     * const servicers = await prisma.servicers.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Servicers and only return the `account_id`
     * const servicersWithAccount_idOnly = await prisma.servicers.createManyAndReturn({ 
     *   select: { account_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends servicersCreateManyAndReturnArgs>(args?: SelectSubset<T, servicersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$servicersPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Servicers.
     * @param {servicersDeleteArgs} args - Arguments to delete one Servicers.
     * @example
     * // Delete one Servicers
     * const Servicers = await prisma.servicers.delete({
     *   where: {
     *     // ... filter to delete one Servicers
     *   }
     * })
     * 
     */
    delete<T extends servicersDeleteArgs>(args: SelectSubset<T, servicersDeleteArgs<ExtArgs>>): Prisma__servicersClient<$Result.GetResult<Prisma.$servicersPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Servicers.
     * @param {servicersUpdateArgs} args - Arguments to update one Servicers.
     * @example
     * // Update one Servicers
     * const servicers = await prisma.servicers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends servicersUpdateArgs>(args: SelectSubset<T, servicersUpdateArgs<ExtArgs>>): Prisma__servicersClient<$Result.GetResult<Prisma.$servicersPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Servicers.
     * @param {servicersDeleteManyArgs} args - Arguments to filter Servicers to delete.
     * @example
     * // Delete a few Servicers
     * const { count } = await prisma.servicers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends servicersDeleteManyArgs>(args?: SelectSubset<T, servicersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Servicers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {servicersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Servicers
     * const servicers = await prisma.servicers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends servicersUpdateManyArgs>(args: SelectSubset<T, servicersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Servicers.
     * @param {servicersUpsertArgs} args - Arguments to update or create a Servicers.
     * @example
     * // Update or create a Servicers
     * const servicers = await prisma.servicers.upsert({
     *   create: {
     *     // ... data to create a Servicers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Servicers we want to update
     *   }
     * })
     */
    upsert<T extends servicersUpsertArgs>(args: SelectSubset<T, servicersUpsertArgs<ExtArgs>>): Prisma__servicersClient<$Result.GetResult<Prisma.$servicersPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Servicers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {servicersCountArgs} args - Arguments to filter Servicers to count.
     * @example
     * // Count the number of Servicers
     * const count = await prisma.servicers.count({
     *   where: {
     *     // ... the filter for the Servicers we want to count
     *   }
     * })
    **/
    count<T extends servicersCountArgs>(
      args?: Subset<T, servicersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServicersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Servicers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ServicersAggregateArgs>(args: Subset<T, ServicersAggregateArgs>): Prisma.PrismaPromise<GetServicersAggregateType<T>>

    /**
     * Group by Servicers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {servicersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends servicersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: servicersGroupByArgs['orderBy'] }
        : { orderBy?: servicersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, servicersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServicersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the servicers model
   */
  readonly fields: servicersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for servicers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__servicersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    accounts<T extends accountsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, accountsDefaultArgs<ExtArgs>>): Prisma__accountsClient<$Result.GetResult<Prisma.$accountsPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the servicers model
   */ 
  interface servicersFieldRefs {
    readonly account_id: FieldRef<"servicers", 'String'>
    readonly scheme_name: FieldRef<"servicers", 'String'>
    readonly identification: FieldRef<"servicers", 'String'>
  }
    

  // Custom InputTypes
  /**
   * servicers findUnique
   */
  export type servicersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servicers
     */
    select?: servicersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: servicersInclude<ExtArgs> | null
    /**
     * Filter, which servicers to fetch.
     */
    where: servicersWhereUniqueInput
  }

  /**
   * servicers findUniqueOrThrow
   */
  export type servicersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servicers
     */
    select?: servicersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: servicersInclude<ExtArgs> | null
    /**
     * Filter, which servicers to fetch.
     */
    where: servicersWhereUniqueInput
  }

  /**
   * servicers findFirst
   */
  export type servicersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servicers
     */
    select?: servicersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: servicersInclude<ExtArgs> | null
    /**
     * Filter, which servicers to fetch.
     */
    where?: servicersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of servicers to fetch.
     */
    orderBy?: servicersOrderByWithRelationInput | servicersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for servicers.
     */
    cursor?: servicersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` servicers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` servicers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of servicers.
     */
    distinct?: ServicersScalarFieldEnum | ServicersScalarFieldEnum[]
  }

  /**
   * servicers findFirstOrThrow
   */
  export type servicersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servicers
     */
    select?: servicersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: servicersInclude<ExtArgs> | null
    /**
     * Filter, which servicers to fetch.
     */
    where?: servicersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of servicers to fetch.
     */
    orderBy?: servicersOrderByWithRelationInput | servicersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for servicers.
     */
    cursor?: servicersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` servicers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` servicers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of servicers.
     */
    distinct?: ServicersScalarFieldEnum | ServicersScalarFieldEnum[]
  }

  /**
   * servicers findMany
   */
  export type servicersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servicers
     */
    select?: servicersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: servicersInclude<ExtArgs> | null
    /**
     * Filter, which servicers to fetch.
     */
    where?: servicersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of servicers to fetch.
     */
    orderBy?: servicersOrderByWithRelationInput | servicersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing servicers.
     */
    cursor?: servicersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` servicers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` servicers.
     */
    skip?: number
    distinct?: ServicersScalarFieldEnum | ServicersScalarFieldEnum[]
  }

  /**
   * servicers create
   */
  export type servicersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servicers
     */
    select?: servicersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: servicersInclude<ExtArgs> | null
    /**
     * The data needed to create a servicers.
     */
    data: XOR<servicersCreateInput, servicersUncheckedCreateInput>
  }

  /**
   * servicers createMany
   */
  export type servicersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many servicers.
     */
    data: servicersCreateManyInput | servicersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * servicers createManyAndReturn
   */
  export type servicersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servicers
     */
    select?: servicersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many servicers.
     */
    data: servicersCreateManyInput | servicersCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: servicersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * servicers update
   */
  export type servicersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servicers
     */
    select?: servicersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: servicersInclude<ExtArgs> | null
    /**
     * The data needed to update a servicers.
     */
    data: XOR<servicersUpdateInput, servicersUncheckedUpdateInput>
    /**
     * Choose, which servicers to update.
     */
    where: servicersWhereUniqueInput
  }

  /**
   * servicers updateMany
   */
  export type servicersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update servicers.
     */
    data: XOR<servicersUpdateManyMutationInput, servicersUncheckedUpdateManyInput>
    /**
     * Filter which servicers to update
     */
    where?: servicersWhereInput
  }

  /**
   * servicers upsert
   */
  export type servicersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servicers
     */
    select?: servicersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: servicersInclude<ExtArgs> | null
    /**
     * The filter to search for the servicers to update in case it exists.
     */
    where: servicersWhereUniqueInput
    /**
     * In case the servicers found by the `where` argument doesn't exist, create a new servicers with this data.
     */
    create: XOR<servicersCreateInput, servicersUncheckedCreateInput>
    /**
     * In case the servicers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<servicersUpdateInput, servicersUncheckedUpdateInput>
  }

  /**
   * servicers delete
   */
  export type servicersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servicers
     */
    select?: servicersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: servicersInclude<ExtArgs> | null
    /**
     * Filter which servicers to delete.
     */
    where: servicersWhereUniqueInput
  }

  /**
   * servicers deleteMany
   */
  export type servicersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which servicers to delete
     */
    where?: servicersWhereInput
  }

  /**
   * servicers without action
   */
  export type servicersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the servicers
     */
    select?: servicersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: servicersInclude<ExtArgs> | null
  }


  /**
   * Model transactions
   */

  export type AggregateTransactions = {
    _count: TransactionsCountAggregateOutputType | null
    _avg: TransactionsAvgAggregateOutputType | null
    _sum: TransactionsSumAggregateOutputType | null
    _min: TransactionsMinAggregateOutputType | null
    _max: TransactionsMaxAggregateOutputType | null
  }

  export type TransactionsAvgAggregateOutputType = {
    amount_value: Decimal | null
  }

  export type TransactionsSumAggregateOutputType = {
    amount_value: Decimal | null
  }

  export type TransactionsMinAggregateOutputType = {
    transaction_id: string | null
    account_id: string | null
    credit_debit_indicator: string | null
    status: string | null
    booking_datetime: Date | null
    amount_value: Decimal | null
    amount_currency: string | null
  }

  export type TransactionsMaxAggregateOutputType = {
    transaction_id: string | null
    account_id: string | null
    credit_debit_indicator: string | null
    status: string | null
    booking_datetime: Date | null
    amount_value: Decimal | null
    amount_currency: string | null
  }

  export type TransactionsCountAggregateOutputType = {
    transaction_id: number
    account_id: number
    credit_debit_indicator: number
    status: number
    booking_datetime: number
    amount_value: number
    amount_currency: number
    _all: number
  }


  export type TransactionsAvgAggregateInputType = {
    amount_value?: true
  }

  export type TransactionsSumAggregateInputType = {
    amount_value?: true
  }

  export type TransactionsMinAggregateInputType = {
    transaction_id?: true
    account_id?: true
    credit_debit_indicator?: true
    status?: true
    booking_datetime?: true
    amount_value?: true
    amount_currency?: true
  }

  export type TransactionsMaxAggregateInputType = {
    transaction_id?: true
    account_id?: true
    credit_debit_indicator?: true
    status?: true
    booking_datetime?: true
    amount_value?: true
    amount_currency?: true
  }

  export type TransactionsCountAggregateInputType = {
    transaction_id?: true
    account_id?: true
    credit_debit_indicator?: true
    status?: true
    booking_datetime?: true
    amount_value?: true
    amount_currency?: true
    _all?: true
  }

  export type TransactionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which transactions to aggregate.
     */
    where?: transactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transactions to fetch.
     */
    orderBy?: transactionsOrderByWithRelationInput | transactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: transactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned transactions
    **/
    _count?: true | TransactionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransactionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransactionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransactionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransactionsMaxAggregateInputType
  }

  export type GetTransactionsAggregateType<T extends TransactionsAggregateArgs> = {
        [P in keyof T & keyof AggregateTransactions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransactions[P]>
      : GetScalarType<T[P], AggregateTransactions[P]>
  }




  export type transactionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: transactionsWhereInput
    orderBy?: transactionsOrderByWithAggregationInput | transactionsOrderByWithAggregationInput[]
    by: TransactionsScalarFieldEnum[] | TransactionsScalarFieldEnum
    having?: transactionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransactionsCountAggregateInputType | true
    _avg?: TransactionsAvgAggregateInputType
    _sum?: TransactionsSumAggregateInputType
    _min?: TransactionsMinAggregateInputType
    _max?: TransactionsMaxAggregateInputType
  }

  export type TransactionsGroupByOutputType = {
    transaction_id: string
    account_id: string | null
    credit_debit_indicator: string | null
    status: string | null
    booking_datetime: Date | null
    amount_value: Decimal | null
    amount_currency: string | null
    _count: TransactionsCountAggregateOutputType | null
    _avg: TransactionsAvgAggregateOutputType | null
    _sum: TransactionsSumAggregateOutputType | null
    _min: TransactionsMinAggregateOutputType | null
    _max: TransactionsMaxAggregateOutputType | null
  }

  type GetTransactionsGroupByPayload<T extends transactionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransactionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransactionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransactionsGroupByOutputType[P]>
            : GetScalarType<T[P], TransactionsGroupByOutputType[P]>
        }
      >
    >


  export type transactionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    transaction_id?: boolean
    account_id?: boolean
    credit_debit_indicator?: boolean
    status?: boolean
    booking_datetime?: boolean
    amount_value?: boolean
    amount_currency?: boolean
    accounts?: boolean | transactions$accountsArgs<ExtArgs>
  }, ExtArgs["result"]["transactions"]>

  export type transactionsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    transaction_id?: boolean
    account_id?: boolean
    credit_debit_indicator?: boolean
    status?: boolean
    booking_datetime?: boolean
    amount_value?: boolean
    amount_currency?: boolean
    accounts?: boolean | transactions$accountsArgs<ExtArgs>
  }, ExtArgs["result"]["transactions"]>

  export type transactionsSelectScalar = {
    transaction_id?: boolean
    account_id?: boolean
    credit_debit_indicator?: boolean
    status?: boolean
    booking_datetime?: boolean
    amount_value?: boolean
    amount_currency?: boolean
  }

  export type transactionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | transactions$accountsArgs<ExtArgs>
  }
  export type transactionsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | transactions$accountsArgs<ExtArgs>
  }

  export type $transactionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "transactions"
    objects: {
      accounts: Prisma.$accountsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      transaction_id: string
      account_id: string | null
      credit_debit_indicator: string | null
      status: string | null
      booking_datetime: Date | null
      amount_value: Prisma.Decimal | null
      amount_currency: string | null
    }, ExtArgs["result"]["transactions"]>
    composites: {}
  }

  type transactionsGetPayload<S extends boolean | null | undefined | transactionsDefaultArgs> = $Result.GetResult<Prisma.$transactionsPayload, S>

  type transactionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<transactionsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TransactionsCountAggregateInputType | true
    }

  export interface transactionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['transactions'], meta: { name: 'transactions' } }
    /**
     * Find zero or one Transactions that matches the filter.
     * @param {transactionsFindUniqueArgs} args - Arguments to find a Transactions
     * @example
     * // Get one Transactions
     * const transactions = await prisma.transactions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends transactionsFindUniqueArgs>(args: SelectSubset<T, transactionsFindUniqueArgs<ExtArgs>>): Prisma__transactionsClient<$Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Transactions that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {transactionsFindUniqueOrThrowArgs} args - Arguments to find a Transactions
     * @example
     * // Get one Transactions
     * const transactions = await prisma.transactions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends transactionsFindUniqueOrThrowArgs>(args: SelectSubset<T, transactionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__transactionsClient<$Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionsFindFirstArgs} args - Arguments to find a Transactions
     * @example
     * // Get one Transactions
     * const transactions = await prisma.transactions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends transactionsFindFirstArgs>(args?: SelectSubset<T, transactionsFindFirstArgs<ExtArgs>>): Prisma__transactionsClient<$Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Transactions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionsFindFirstOrThrowArgs} args - Arguments to find a Transactions
     * @example
     * // Get one Transactions
     * const transactions = await prisma.transactions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends transactionsFindFirstOrThrowArgs>(args?: SelectSubset<T, transactionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__transactionsClient<$Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transactions
     * const transactions = await prisma.transactions.findMany()
     * 
     * // Get first 10 Transactions
     * const transactions = await prisma.transactions.findMany({ take: 10 })
     * 
     * // Only select the `transaction_id`
     * const transactionsWithTransaction_idOnly = await prisma.transactions.findMany({ select: { transaction_id: true } })
     * 
     */
    findMany<T extends transactionsFindManyArgs>(args?: SelectSubset<T, transactionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Transactions.
     * @param {transactionsCreateArgs} args - Arguments to create a Transactions.
     * @example
     * // Create one Transactions
     * const Transactions = await prisma.transactions.create({
     *   data: {
     *     // ... data to create a Transactions
     *   }
     * })
     * 
     */
    create<T extends transactionsCreateArgs>(args: SelectSubset<T, transactionsCreateArgs<ExtArgs>>): Prisma__transactionsClient<$Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Transactions.
     * @param {transactionsCreateManyArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transactions = await prisma.transactions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends transactionsCreateManyArgs>(args?: SelectSubset<T, transactionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Transactions and returns the data saved in the database.
     * @param {transactionsCreateManyAndReturnArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transactions = await prisma.transactions.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Transactions and only return the `transaction_id`
     * const transactionsWithTransaction_idOnly = await prisma.transactions.createManyAndReturn({ 
     *   select: { transaction_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends transactionsCreateManyAndReturnArgs>(args?: SelectSubset<T, transactionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Transactions.
     * @param {transactionsDeleteArgs} args - Arguments to delete one Transactions.
     * @example
     * // Delete one Transactions
     * const Transactions = await prisma.transactions.delete({
     *   where: {
     *     // ... filter to delete one Transactions
     *   }
     * })
     * 
     */
    delete<T extends transactionsDeleteArgs>(args: SelectSubset<T, transactionsDeleteArgs<ExtArgs>>): Prisma__transactionsClient<$Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Transactions.
     * @param {transactionsUpdateArgs} args - Arguments to update one Transactions.
     * @example
     * // Update one Transactions
     * const transactions = await prisma.transactions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends transactionsUpdateArgs>(args: SelectSubset<T, transactionsUpdateArgs<ExtArgs>>): Prisma__transactionsClient<$Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Transactions.
     * @param {transactionsDeleteManyArgs} args - Arguments to filter Transactions to delete.
     * @example
     * // Delete a few Transactions
     * const { count } = await prisma.transactions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends transactionsDeleteManyArgs>(args?: SelectSubset<T, transactionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transactions
     * const transactions = await prisma.transactions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends transactionsUpdateManyArgs>(args: SelectSubset<T, transactionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Transactions.
     * @param {transactionsUpsertArgs} args - Arguments to update or create a Transactions.
     * @example
     * // Update or create a Transactions
     * const transactions = await prisma.transactions.upsert({
     *   create: {
     *     // ... data to create a Transactions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transactions we want to update
     *   }
     * })
     */
    upsert<T extends transactionsUpsertArgs>(args: SelectSubset<T, transactionsUpsertArgs<ExtArgs>>): Prisma__transactionsClient<$Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionsCountArgs} args - Arguments to filter Transactions to count.
     * @example
     * // Count the number of Transactions
     * const count = await prisma.transactions.count({
     *   where: {
     *     // ... the filter for the Transactions we want to count
     *   }
     * })
    **/
    count<T extends transactionsCountArgs>(
      args?: Subset<T, transactionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransactionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TransactionsAggregateArgs>(args: Subset<T, TransactionsAggregateArgs>): Prisma.PrismaPromise<GetTransactionsAggregateType<T>>

    /**
     * Group by Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends transactionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: transactionsGroupByArgs['orderBy'] }
        : { orderBy?: transactionsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, transactionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the transactions model
   */
  readonly fields: transactionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for transactions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__transactionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    accounts<T extends transactions$accountsArgs<ExtArgs> = {}>(args?: Subset<T, transactions$accountsArgs<ExtArgs>>): Prisma__accountsClient<$Result.GetResult<Prisma.$accountsPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the transactions model
   */ 
  interface transactionsFieldRefs {
    readonly transaction_id: FieldRef<"transactions", 'String'>
    readonly account_id: FieldRef<"transactions", 'String'>
    readonly credit_debit_indicator: FieldRef<"transactions", 'String'>
    readonly status: FieldRef<"transactions", 'String'>
    readonly booking_datetime: FieldRef<"transactions", 'DateTime'>
    readonly amount_value: FieldRef<"transactions", 'Decimal'>
    readonly amount_currency: FieldRef<"transactions", 'String'>
  }
    

  // Custom InputTypes
  /**
   * transactions findUnique
   */
  export type transactionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionsInclude<ExtArgs> | null
    /**
     * Filter, which transactions to fetch.
     */
    where: transactionsWhereUniqueInput
  }

  /**
   * transactions findUniqueOrThrow
   */
  export type transactionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionsInclude<ExtArgs> | null
    /**
     * Filter, which transactions to fetch.
     */
    where: transactionsWhereUniqueInput
  }

  /**
   * transactions findFirst
   */
  export type transactionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionsInclude<ExtArgs> | null
    /**
     * Filter, which transactions to fetch.
     */
    where?: transactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transactions to fetch.
     */
    orderBy?: transactionsOrderByWithRelationInput | transactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for transactions.
     */
    cursor?: transactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of transactions.
     */
    distinct?: TransactionsScalarFieldEnum | TransactionsScalarFieldEnum[]
  }

  /**
   * transactions findFirstOrThrow
   */
  export type transactionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionsInclude<ExtArgs> | null
    /**
     * Filter, which transactions to fetch.
     */
    where?: transactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transactions to fetch.
     */
    orderBy?: transactionsOrderByWithRelationInput | transactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for transactions.
     */
    cursor?: transactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of transactions.
     */
    distinct?: TransactionsScalarFieldEnum | TransactionsScalarFieldEnum[]
  }

  /**
   * transactions findMany
   */
  export type transactionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionsInclude<ExtArgs> | null
    /**
     * Filter, which transactions to fetch.
     */
    where?: transactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transactions to fetch.
     */
    orderBy?: transactionsOrderByWithRelationInput | transactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing transactions.
     */
    cursor?: transactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transactions.
     */
    skip?: number
    distinct?: TransactionsScalarFieldEnum | TransactionsScalarFieldEnum[]
  }

  /**
   * transactions create
   */
  export type transactionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionsInclude<ExtArgs> | null
    /**
     * The data needed to create a transactions.
     */
    data: XOR<transactionsCreateInput, transactionsUncheckedCreateInput>
  }

  /**
   * transactions createMany
   */
  export type transactionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many transactions.
     */
    data: transactionsCreateManyInput | transactionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * transactions createManyAndReturn
   */
  export type transactionsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many transactions.
     */
    data: transactionsCreateManyInput | transactionsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * transactions update
   */
  export type transactionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionsInclude<ExtArgs> | null
    /**
     * The data needed to update a transactions.
     */
    data: XOR<transactionsUpdateInput, transactionsUncheckedUpdateInput>
    /**
     * Choose, which transactions to update.
     */
    where: transactionsWhereUniqueInput
  }

  /**
   * transactions updateMany
   */
  export type transactionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update transactions.
     */
    data: XOR<transactionsUpdateManyMutationInput, transactionsUncheckedUpdateManyInput>
    /**
     * Filter which transactions to update
     */
    where?: transactionsWhereInput
  }

  /**
   * transactions upsert
   */
  export type transactionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionsInclude<ExtArgs> | null
    /**
     * The filter to search for the transactions to update in case it exists.
     */
    where: transactionsWhereUniqueInput
    /**
     * In case the transactions found by the `where` argument doesn't exist, create a new transactions with this data.
     */
    create: XOR<transactionsCreateInput, transactionsUncheckedCreateInput>
    /**
     * In case the transactions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<transactionsUpdateInput, transactionsUncheckedUpdateInput>
  }

  /**
   * transactions delete
   */
  export type transactionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionsInclude<ExtArgs> | null
    /**
     * Filter which transactions to delete.
     */
    where: transactionsWhereUniqueInput
  }

  /**
   * transactions deleteMany
   */
  export type transactionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which transactions to delete
     */
    where?: transactionsWhereInput
  }

  /**
   * transactions.accounts
   */
  export type transactions$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accounts
     */
    select?: accountsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountsInclude<ExtArgs> | null
    where?: accountsWhereInput
  }

  /**
   * transactions without action
   */
  export type transactionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionsInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const Account_detailsScalarFieldEnum: {
    account_id: 'account_id',
    scheme_name: 'scheme_name',
    identification: 'identification',
    name: 'name',
    secondary_identification: 'secondary_identification'
  };

  export type Account_detailsScalarFieldEnum = (typeof Account_detailsScalarFieldEnum)[keyof typeof Account_detailsScalarFieldEnum]


  export const AccountsScalarFieldEnum: {
    id: 'id',
    status: 'status',
    status_update_datetime: 'status_update_datetime',
    currency: 'currency',
    account_type: 'account_type',
    account_sub_type: 'account_sub_type',
    description: 'description',
    nickname: 'nickname',
    opening_date: 'opening_date',
    maturity_date: 'maturity_date',
    switch_status: 'switch_status'
  };

  export type AccountsScalarFieldEnum = (typeof AccountsScalarFieldEnum)[keyof typeof AccountsScalarFieldEnum]


  export const BalancesScalarFieldEnum: {
    account_id: 'account_id',
    credit_debit_indicator: 'credit_debit_indicator',
    type: 'type',
    amount_value: 'amount_value',
    amount_currency: 'amount_currency',
    date_time: 'date_time',
    credit_line_included: 'credit_line_included',
    credit_line_amount_value: 'credit_line_amount_value',
    credit_line_amount_currency: 'credit_line_amount_currency'
  };

  export type BalancesScalarFieldEnum = (typeof BalancesScalarFieldEnum)[keyof typeof BalancesScalarFieldEnum]


  export const ServicersScalarFieldEnum: {
    account_id: 'account_id',
    scheme_name: 'scheme_name',
    identification: 'identification'
  };

  export type ServicersScalarFieldEnum = (typeof ServicersScalarFieldEnum)[keyof typeof ServicersScalarFieldEnum]


  export const TransactionsScalarFieldEnum: {
    transaction_id: 'transaction_id',
    account_id: 'account_id',
    credit_debit_indicator: 'credit_debit_indicator',
    status: 'status',
    booking_datetime: 'booking_datetime',
    amount_value: 'amount_value',
    amount_currency: 'amount_currency'
  };

  export type TransactionsScalarFieldEnum = (typeof TransactionsScalarFieldEnum)[keyof typeof TransactionsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type account_detailsWhereInput = {
    AND?: account_detailsWhereInput | account_detailsWhereInput[]
    OR?: account_detailsWhereInput[]
    NOT?: account_detailsWhereInput | account_detailsWhereInput[]
    account_id?: StringFilter<"account_details"> | string
    scheme_name?: StringNullableFilter<"account_details"> | string | null
    identification?: StringFilter<"account_details"> | string
    name?: StringNullableFilter<"account_details"> | string | null
    secondary_identification?: StringNullableFilter<"account_details"> | string | null
    accounts?: XOR<AccountsRelationFilter, accountsWhereInput>
  }

  export type account_detailsOrderByWithRelationInput = {
    account_id?: SortOrder
    scheme_name?: SortOrderInput | SortOrder
    identification?: SortOrder
    name?: SortOrderInput | SortOrder
    secondary_identification?: SortOrderInput | SortOrder
    accounts?: accountsOrderByWithRelationInput
  }

  export type account_detailsWhereUniqueInput = Prisma.AtLeast<{
    account_id_identification?: account_detailsAccount_idIdentificationCompoundUniqueInput
    AND?: account_detailsWhereInput | account_detailsWhereInput[]
    OR?: account_detailsWhereInput[]
    NOT?: account_detailsWhereInput | account_detailsWhereInput[]
    account_id?: StringFilter<"account_details"> | string
    scheme_name?: StringNullableFilter<"account_details"> | string | null
    identification?: StringFilter<"account_details"> | string
    name?: StringNullableFilter<"account_details"> | string | null
    secondary_identification?: StringNullableFilter<"account_details"> | string | null
    accounts?: XOR<AccountsRelationFilter, accountsWhereInput>
  }, "account_id_identification">

  export type account_detailsOrderByWithAggregationInput = {
    account_id?: SortOrder
    scheme_name?: SortOrderInput | SortOrder
    identification?: SortOrder
    name?: SortOrderInput | SortOrder
    secondary_identification?: SortOrderInput | SortOrder
    _count?: account_detailsCountOrderByAggregateInput
    _max?: account_detailsMaxOrderByAggregateInput
    _min?: account_detailsMinOrderByAggregateInput
  }

  export type account_detailsScalarWhereWithAggregatesInput = {
    AND?: account_detailsScalarWhereWithAggregatesInput | account_detailsScalarWhereWithAggregatesInput[]
    OR?: account_detailsScalarWhereWithAggregatesInput[]
    NOT?: account_detailsScalarWhereWithAggregatesInput | account_detailsScalarWhereWithAggregatesInput[]
    account_id?: StringWithAggregatesFilter<"account_details"> | string
    scheme_name?: StringNullableWithAggregatesFilter<"account_details"> | string | null
    identification?: StringWithAggregatesFilter<"account_details"> | string
    name?: StringNullableWithAggregatesFilter<"account_details"> | string | null
    secondary_identification?: StringNullableWithAggregatesFilter<"account_details"> | string | null
  }

  export type accountsWhereInput = {
    AND?: accountsWhereInput | accountsWhereInput[]
    OR?: accountsWhereInput[]
    NOT?: accountsWhereInput | accountsWhereInput[]
    id?: StringFilter<"accounts"> | string
    status?: StringNullableFilter<"accounts"> | string | null
    status_update_datetime?: DateTimeNullableFilter<"accounts"> | Date | string | null
    currency?: StringNullableFilter<"accounts"> | string | null
    account_type?: StringNullableFilter<"accounts"> | string | null
    account_sub_type?: StringNullableFilter<"accounts"> | string | null
    description?: StringNullableFilter<"accounts"> | string | null
    nickname?: StringNullableFilter<"accounts"> | string | null
    opening_date?: DateTimeNullableFilter<"accounts"> | Date | string | null
    maturity_date?: DateTimeNullableFilter<"accounts"> | Date | string | null
    switch_status?: StringNullableFilter<"accounts"> | string | null
    account_details?: Account_detailsListRelationFilter
    balances?: XOR<BalancesNullableRelationFilter, balancesWhereInput> | null
    servicers?: XOR<ServicersNullableRelationFilter, servicersWhereInput> | null
    transactions?: TransactionsListRelationFilter
  }

  export type accountsOrderByWithRelationInput = {
    id?: SortOrder
    status?: SortOrderInput | SortOrder
    status_update_datetime?: SortOrderInput | SortOrder
    currency?: SortOrderInput | SortOrder
    account_type?: SortOrderInput | SortOrder
    account_sub_type?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    nickname?: SortOrderInput | SortOrder
    opening_date?: SortOrderInput | SortOrder
    maturity_date?: SortOrderInput | SortOrder
    switch_status?: SortOrderInput | SortOrder
    account_details?: account_detailsOrderByRelationAggregateInput
    balances?: balancesOrderByWithRelationInput
    servicers?: servicersOrderByWithRelationInput
    transactions?: transactionsOrderByRelationAggregateInput
  }

  export type accountsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: accountsWhereInput | accountsWhereInput[]
    OR?: accountsWhereInput[]
    NOT?: accountsWhereInput | accountsWhereInput[]
    status?: StringNullableFilter<"accounts"> | string | null
    status_update_datetime?: DateTimeNullableFilter<"accounts"> | Date | string | null
    currency?: StringNullableFilter<"accounts"> | string | null
    account_type?: StringNullableFilter<"accounts"> | string | null
    account_sub_type?: StringNullableFilter<"accounts"> | string | null
    description?: StringNullableFilter<"accounts"> | string | null
    nickname?: StringNullableFilter<"accounts"> | string | null
    opening_date?: DateTimeNullableFilter<"accounts"> | Date | string | null
    maturity_date?: DateTimeNullableFilter<"accounts"> | Date | string | null
    switch_status?: StringNullableFilter<"accounts"> | string | null
    account_details?: Account_detailsListRelationFilter
    balances?: XOR<BalancesNullableRelationFilter, balancesWhereInput> | null
    servicers?: XOR<ServicersNullableRelationFilter, servicersWhereInput> | null
    transactions?: TransactionsListRelationFilter
  }, "id">

  export type accountsOrderByWithAggregationInput = {
    id?: SortOrder
    status?: SortOrderInput | SortOrder
    status_update_datetime?: SortOrderInput | SortOrder
    currency?: SortOrderInput | SortOrder
    account_type?: SortOrderInput | SortOrder
    account_sub_type?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    nickname?: SortOrderInput | SortOrder
    opening_date?: SortOrderInput | SortOrder
    maturity_date?: SortOrderInput | SortOrder
    switch_status?: SortOrderInput | SortOrder
    _count?: accountsCountOrderByAggregateInput
    _max?: accountsMaxOrderByAggregateInput
    _min?: accountsMinOrderByAggregateInput
  }

  export type accountsScalarWhereWithAggregatesInput = {
    AND?: accountsScalarWhereWithAggregatesInput | accountsScalarWhereWithAggregatesInput[]
    OR?: accountsScalarWhereWithAggregatesInput[]
    NOT?: accountsScalarWhereWithAggregatesInput | accountsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"accounts"> | string
    status?: StringNullableWithAggregatesFilter<"accounts"> | string | null
    status_update_datetime?: DateTimeNullableWithAggregatesFilter<"accounts"> | Date | string | null
    currency?: StringNullableWithAggregatesFilter<"accounts"> | string | null
    account_type?: StringNullableWithAggregatesFilter<"accounts"> | string | null
    account_sub_type?: StringNullableWithAggregatesFilter<"accounts"> | string | null
    description?: StringNullableWithAggregatesFilter<"accounts"> | string | null
    nickname?: StringNullableWithAggregatesFilter<"accounts"> | string | null
    opening_date?: DateTimeNullableWithAggregatesFilter<"accounts"> | Date | string | null
    maturity_date?: DateTimeNullableWithAggregatesFilter<"accounts"> | Date | string | null
    switch_status?: StringNullableWithAggregatesFilter<"accounts"> | string | null
  }

  export type balancesWhereInput = {
    AND?: balancesWhereInput | balancesWhereInput[]
    OR?: balancesWhereInput[]
    NOT?: balancesWhereInput | balancesWhereInput[]
    account_id?: StringFilter<"balances"> | string
    credit_debit_indicator?: StringNullableFilter<"balances"> | string | null
    type?: StringNullableFilter<"balances"> | string | null
    amount_value?: DecimalNullableFilter<"balances"> | Decimal | DecimalJsLike | number | string | null
    amount_currency?: StringNullableFilter<"balances"> | string | null
    date_time?: DateTimeNullableFilter<"balances"> | Date | string | null
    credit_line_included?: BoolNullableFilter<"balances"> | boolean | null
    credit_line_amount_value?: DecimalNullableFilter<"balances"> | Decimal | DecimalJsLike | number | string | null
    credit_line_amount_currency?: StringNullableFilter<"balances"> | string | null
    accounts?: XOR<AccountsRelationFilter, accountsWhereInput>
  }

  export type balancesOrderByWithRelationInput = {
    account_id?: SortOrder
    credit_debit_indicator?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    amount_value?: SortOrderInput | SortOrder
    amount_currency?: SortOrderInput | SortOrder
    date_time?: SortOrderInput | SortOrder
    credit_line_included?: SortOrderInput | SortOrder
    credit_line_amount_value?: SortOrderInput | SortOrder
    credit_line_amount_currency?: SortOrderInput | SortOrder
    accounts?: accountsOrderByWithRelationInput
  }

  export type balancesWhereUniqueInput = Prisma.AtLeast<{
    account_id?: string
    AND?: balancesWhereInput | balancesWhereInput[]
    OR?: balancesWhereInput[]
    NOT?: balancesWhereInput | balancesWhereInput[]
    credit_debit_indicator?: StringNullableFilter<"balances"> | string | null
    type?: StringNullableFilter<"balances"> | string | null
    amount_value?: DecimalNullableFilter<"balances"> | Decimal | DecimalJsLike | number | string | null
    amount_currency?: StringNullableFilter<"balances"> | string | null
    date_time?: DateTimeNullableFilter<"balances"> | Date | string | null
    credit_line_included?: BoolNullableFilter<"balances"> | boolean | null
    credit_line_amount_value?: DecimalNullableFilter<"balances"> | Decimal | DecimalJsLike | number | string | null
    credit_line_amount_currency?: StringNullableFilter<"balances"> | string | null
    accounts?: XOR<AccountsRelationFilter, accountsWhereInput>
  }, "account_id">

  export type balancesOrderByWithAggregationInput = {
    account_id?: SortOrder
    credit_debit_indicator?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    amount_value?: SortOrderInput | SortOrder
    amount_currency?: SortOrderInput | SortOrder
    date_time?: SortOrderInput | SortOrder
    credit_line_included?: SortOrderInput | SortOrder
    credit_line_amount_value?: SortOrderInput | SortOrder
    credit_line_amount_currency?: SortOrderInput | SortOrder
    _count?: balancesCountOrderByAggregateInput
    _avg?: balancesAvgOrderByAggregateInput
    _max?: balancesMaxOrderByAggregateInput
    _min?: balancesMinOrderByAggregateInput
    _sum?: balancesSumOrderByAggregateInput
  }

  export type balancesScalarWhereWithAggregatesInput = {
    AND?: balancesScalarWhereWithAggregatesInput | balancesScalarWhereWithAggregatesInput[]
    OR?: balancesScalarWhereWithAggregatesInput[]
    NOT?: balancesScalarWhereWithAggregatesInput | balancesScalarWhereWithAggregatesInput[]
    account_id?: StringWithAggregatesFilter<"balances"> | string
    credit_debit_indicator?: StringNullableWithAggregatesFilter<"balances"> | string | null
    type?: StringNullableWithAggregatesFilter<"balances"> | string | null
    amount_value?: DecimalNullableWithAggregatesFilter<"balances"> | Decimal | DecimalJsLike | number | string | null
    amount_currency?: StringNullableWithAggregatesFilter<"balances"> | string | null
    date_time?: DateTimeNullableWithAggregatesFilter<"balances"> | Date | string | null
    credit_line_included?: BoolNullableWithAggregatesFilter<"balances"> | boolean | null
    credit_line_amount_value?: DecimalNullableWithAggregatesFilter<"balances"> | Decimal | DecimalJsLike | number | string | null
    credit_line_amount_currency?: StringNullableWithAggregatesFilter<"balances"> | string | null
  }

  export type servicersWhereInput = {
    AND?: servicersWhereInput | servicersWhereInput[]
    OR?: servicersWhereInput[]
    NOT?: servicersWhereInput | servicersWhereInput[]
    account_id?: StringFilter<"servicers"> | string
    scheme_name?: StringNullableFilter<"servicers"> | string | null
    identification?: StringNullableFilter<"servicers"> | string | null
    accounts?: XOR<AccountsRelationFilter, accountsWhereInput>
  }

  export type servicersOrderByWithRelationInput = {
    account_id?: SortOrder
    scheme_name?: SortOrderInput | SortOrder
    identification?: SortOrderInput | SortOrder
    accounts?: accountsOrderByWithRelationInput
  }

  export type servicersWhereUniqueInput = Prisma.AtLeast<{
    account_id?: string
    AND?: servicersWhereInput | servicersWhereInput[]
    OR?: servicersWhereInput[]
    NOT?: servicersWhereInput | servicersWhereInput[]
    scheme_name?: StringNullableFilter<"servicers"> | string | null
    identification?: StringNullableFilter<"servicers"> | string | null
    accounts?: XOR<AccountsRelationFilter, accountsWhereInput>
  }, "account_id">

  export type servicersOrderByWithAggregationInput = {
    account_id?: SortOrder
    scheme_name?: SortOrderInput | SortOrder
    identification?: SortOrderInput | SortOrder
    _count?: servicersCountOrderByAggregateInput
    _max?: servicersMaxOrderByAggregateInput
    _min?: servicersMinOrderByAggregateInput
  }

  export type servicersScalarWhereWithAggregatesInput = {
    AND?: servicersScalarWhereWithAggregatesInput | servicersScalarWhereWithAggregatesInput[]
    OR?: servicersScalarWhereWithAggregatesInput[]
    NOT?: servicersScalarWhereWithAggregatesInput | servicersScalarWhereWithAggregatesInput[]
    account_id?: StringWithAggregatesFilter<"servicers"> | string
    scheme_name?: StringNullableWithAggregatesFilter<"servicers"> | string | null
    identification?: StringNullableWithAggregatesFilter<"servicers"> | string | null
  }

  export type transactionsWhereInput = {
    AND?: transactionsWhereInput | transactionsWhereInput[]
    OR?: transactionsWhereInput[]
    NOT?: transactionsWhereInput | transactionsWhereInput[]
    transaction_id?: StringFilter<"transactions"> | string
    account_id?: StringNullableFilter<"transactions"> | string | null
    credit_debit_indicator?: StringNullableFilter<"transactions"> | string | null
    status?: StringNullableFilter<"transactions"> | string | null
    booking_datetime?: DateTimeNullableFilter<"transactions"> | Date | string | null
    amount_value?: DecimalNullableFilter<"transactions"> | Decimal | DecimalJsLike | number | string | null
    amount_currency?: StringNullableFilter<"transactions"> | string | null
    accounts?: XOR<AccountsNullableRelationFilter, accountsWhereInput> | null
  }

  export type transactionsOrderByWithRelationInput = {
    transaction_id?: SortOrder
    account_id?: SortOrderInput | SortOrder
    credit_debit_indicator?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    booking_datetime?: SortOrderInput | SortOrder
    amount_value?: SortOrderInput | SortOrder
    amount_currency?: SortOrderInput | SortOrder
    accounts?: accountsOrderByWithRelationInput
  }

  export type transactionsWhereUniqueInput = Prisma.AtLeast<{
    transaction_id?: string
    AND?: transactionsWhereInput | transactionsWhereInput[]
    OR?: transactionsWhereInput[]
    NOT?: transactionsWhereInput | transactionsWhereInput[]
    account_id?: StringNullableFilter<"transactions"> | string | null
    credit_debit_indicator?: StringNullableFilter<"transactions"> | string | null
    status?: StringNullableFilter<"transactions"> | string | null
    booking_datetime?: DateTimeNullableFilter<"transactions"> | Date | string | null
    amount_value?: DecimalNullableFilter<"transactions"> | Decimal | DecimalJsLike | number | string | null
    amount_currency?: StringNullableFilter<"transactions"> | string | null
    accounts?: XOR<AccountsNullableRelationFilter, accountsWhereInput> | null
  }, "transaction_id">

  export type transactionsOrderByWithAggregationInput = {
    transaction_id?: SortOrder
    account_id?: SortOrderInput | SortOrder
    credit_debit_indicator?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    booking_datetime?: SortOrderInput | SortOrder
    amount_value?: SortOrderInput | SortOrder
    amount_currency?: SortOrderInput | SortOrder
    _count?: transactionsCountOrderByAggregateInput
    _avg?: transactionsAvgOrderByAggregateInput
    _max?: transactionsMaxOrderByAggregateInput
    _min?: transactionsMinOrderByAggregateInput
    _sum?: transactionsSumOrderByAggregateInput
  }

  export type transactionsScalarWhereWithAggregatesInput = {
    AND?: transactionsScalarWhereWithAggregatesInput | transactionsScalarWhereWithAggregatesInput[]
    OR?: transactionsScalarWhereWithAggregatesInput[]
    NOT?: transactionsScalarWhereWithAggregatesInput | transactionsScalarWhereWithAggregatesInput[]
    transaction_id?: StringWithAggregatesFilter<"transactions"> | string
    account_id?: StringNullableWithAggregatesFilter<"transactions"> | string | null
    credit_debit_indicator?: StringNullableWithAggregatesFilter<"transactions"> | string | null
    status?: StringNullableWithAggregatesFilter<"transactions"> | string | null
    booking_datetime?: DateTimeNullableWithAggregatesFilter<"transactions"> | Date | string | null
    amount_value?: DecimalNullableWithAggregatesFilter<"transactions"> | Decimal | DecimalJsLike | number | string | null
    amount_currency?: StringNullableWithAggregatesFilter<"transactions"> | string | null
  }

  export type account_detailsCreateInput = {
    scheme_name?: string | null
    identification: string
    name?: string | null
    secondary_identification?: string | null
    accounts: accountsCreateNestedOneWithoutAccount_detailsInput
  }

  export type account_detailsUncheckedCreateInput = {
    account_id: string
    scheme_name?: string | null
    identification: string
    name?: string | null
    secondary_identification?: string | null
  }

  export type account_detailsUpdateInput = {
    scheme_name?: NullableStringFieldUpdateOperationsInput | string | null
    identification?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    secondary_identification?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: accountsUpdateOneRequiredWithoutAccount_detailsNestedInput
  }

  export type account_detailsUncheckedUpdateInput = {
    account_id?: StringFieldUpdateOperationsInput | string
    scheme_name?: NullableStringFieldUpdateOperationsInput | string | null
    identification?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    secondary_identification?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type account_detailsCreateManyInput = {
    account_id: string
    scheme_name?: string | null
    identification: string
    name?: string | null
    secondary_identification?: string | null
  }

  export type account_detailsUpdateManyMutationInput = {
    scheme_name?: NullableStringFieldUpdateOperationsInput | string | null
    identification?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    secondary_identification?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type account_detailsUncheckedUpdateManyInput = {
    account_id?: StringFieldUpdateOperationsInput | string
    scheme_name?: NullableStringFieldUpdateOperationsInput | string | null
    identification?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    secondary_identification?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type accountsCreateInput = {
    id: string
    status?: string | null
    status_update_datetime?: Date | string | null
    currency?: string | null
    account_type?: string | null
    account_sub_type?: string | null
    description?: string | null
    nickname?: string | null
    opening_date?: Date | string | null
    maturity_date?: Date | string | null
    switch_status?: string | null
    account_details?: account_detailsCreateNestedManyWithoutAccountsInput
    balances?: balancesCreateNestedOneWithoutAccountsInput
    servicers?: servicersCreateNestedOneWithoutAccountsInput
    transactions?: transactionsCreateNestedManyWithoutAccountsInput
  }

  export type accountsUncheckedCreateInput = {
    id: string
    status?: string | null
    status_update_datetime?: Date | string | null
    currency?: string | null
    account_type?: string | null
    account_sub_type?: string | null
    description?: string | null
    nickname?: string | null
    opening_date?: Date | string | null
    maturity_date?: Date | string | null
    switch_status?: string | null
    account_details?: account_detailsUncheckedCreateNestedManyWithoutAccountsInput
    balances?: balancesUncheckedCreateNestedOneWithoutAccountsInput
    servicers?: servicersUncheckedCreateNestedOneWithoutAccountsInput
    transactions?: transactionsUncheckedCreateNestedManyWithoutAccountsInput
  }

  export type accountsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    status_update_datetime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    account_type?: NullableStringFieldUpdateOperationsInput | string | null
    account_sub_type?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    opening_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maturity_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    switch_status?: NullableStringFieldUpdateOperationsInput | string | null
    account_details?: account_detailsUpdateManyWithoutAccountsNestedInput
    balances?: balancesUpdateOneWithoutAccountsNestedInput
    servicers?: servicersUpdateOneWithoutAccountsNestedInput
    transactions?: transactionsUpdateManyWithoutAccountsNestedInput
  }

  export type accountsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    status_update_datetime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    account_type?: NullableStringFieldUpdateOperationsInput | string | null
    account_sub_type?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    opening_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maturity_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    switch_status?: NullableStringFieldUpdateOperationsInput | string | null
    account_details?: account_detailsUncheckedUpdateManyWithoutAccountsNestedInput
    balances?: balancesUncheckedUpdateOneWithoutAccountsNestedInput
    servicers?: servicersUncheckedUpdateOneWithoutAccountsNestedInput
    transactions?: transactionsUncheckedUpdateManyWithoutAccountsNestedInput
  }

  export type accountsCreateManyInput = {
    id: string
    status?: string | null
    status_update_datetime?: Date | string | null
    currency?: string | null
    account_type?: string | null
    account_sub_type?: string | null
    description?: string | null
    nickname?: string | null
    opening_date?: Date | string | null
    maturity_date?: Date | string | null
    switch_status?: string | null
  }

  export type accountsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    status_update_datetime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    account_type?: NullableStringFieldUpdateOperationsInput | string | null
    account_sub_type?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    opening_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maturity_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    switch_status?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type accountsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    status_update_datetime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    account_type?: NullableStringFieldUpdateOperationsInput | string | null
    account_sub_type?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    opening_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maturity_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    switch_status?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type balancesCreateInput = {
    credit_debit_indicator?: string | null
    type?: string | null
    amount_value?: Decimal | DecimalJsLike | number | string | null
    amount_currency?: string | null
    date_time?: Date | string | null
    credit_line_included?: boolean | null
    credit_line_amount_value?: Decimal | DecimalJsLike | number | string | null
    credit_line_amount_currency?: string | null
    accounts: accountsCreateNestedOneWithoutBalancesInput
  }

  export type balancesUncheckedCreateInput = {
    account_id: string
    credit_debit_indicator?: string | null
    type?: string | null
    amount_value?: Decimal | DecimalJsLike | number | string | null
    amount_currency?: string | null
    date_time?: Date | string | null
    credit_line_included?: boolean | null
    credit_line_amount_value?: Decimal | DecimalJsLike | number | string | null
    credit_line_amount_currency?: string | null
  }

  export type balancesUpdateInput = {
    credit_debit_indicator?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    amount_value?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    amount_currency?: NullableStringFieldUpdateOperationsInput | string | null
    date_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    credit_line_included?: NullableBoolFieldUpdateOperationsInput | boolean | null
    credit_line_amount_value?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    credit_line_amount_currency?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: accountsUpdateOneRequiredWithoutBalancesNestedInput
  }

  export type balancesUncheckedUpdateInput = {
    account_id?: StringFieldUpdateOperationsInput | string
    credit_debit_indicator?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    amount_value?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    amount_currency?: NullableStringFieldUpdateOperationsInput | string | null
    date_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    credit_line_included?: NullableBoolFieldUpdateOperationsInput | boolean | null
    credit_line_amount_value?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    credit_line_amount_currency?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type balancesCreateManyInput = {
    account_id: string
    credit_debit_indicator?: string | null
    type?: string | null
    amount_value?: Decimal | DecimalJsLike | number | string | null
    amount_currency?: string | null
    date_time?: Date | string | null
    credit_line_included?: boolean | null
    credit_line_amount_value?: Decimal | DecimalJsLike | number | string | null
    credit_line_amount_currency?: string | null
  }

  export type balancesUpdateManyMutationInput = {
    credit_debit_indicator?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    amount_value?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    amount_currency?: NullableStringFieldUpdateOperationsInput | string | null
    date_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    credit_line_included?: NullableBoolFieldUpdateOperationsInput | boolean | null
    credit_line_amount_value?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    credit_line_amount_currency?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type balancesUncheckedUpdateManyInput = {
    account_id?: StringFieldUpdateOperationsInput | string
    credit_debit_indicator?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    amount_value?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    amount_currency?: NullableStringFieldUpdateOperationsInput | string | null
    date_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    credit_line_included?: NullableBoolFieldUpdateOperationsInput | boolean | null
    credit_line_amount_value?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    credit_line_amount_currency?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type servicersCreateInput = {
    scheme_name?: string | null
    identification?: string | null
    accounts: accountsCreateNestedOneWithoutServicersInput
  }

  export type servicersUncheckedCreateInput = {
    account_id: string
    scheme_name?: string | null
    identification?: string | null
  }

  export type servicersUpdateInput = {
    scheme_name?: NullableStringFieldUpdateOperationsInput | string | null
    identification?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: accountsUpdateOneRequiredWithoutServicersNestedInput
  }

  export type servicersUncheckedUpdateInput = {
    account_id?: StringFieldUpdateOperationsInput | string
    scheme_name?: NullableStringFieldUpdateOperationsInput | string | null
    identification?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type servicersCreateManyInput = {
    account_id: string
    scheme_name?: string | null
    identification?: string | null
  }

  export type servicersUpdateManyMutationInput = {
    scheme_name?: NullableStringFieldUpdateOperationsInput | string | null
    identification?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type servicersUncheckedUpdateManyInput = {
    account_id?: StringFieldUpdateOperationsInput | string
    scheme_name?: NullableStringFieldUpdateOperationsInput | string | null
    identification?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type transactionsCreateInput = {
    transaction_id: string
    credit_debit_indicator?: string | null
    status?: string | null
    booking_datetime?: Date | string | null
    amount_value?: Decimal | DecimalJsLike | number | string | null
    amount_currency?: string | null
    accounts?: accountsCreateNestedOneWithoutTransactionsInput
  }

  export type transactionsUncheckedCreateInput = {
    transaction_id: string
    account_id?: string | null
    credit_debit_indicator?: string | null
    status?: string | null
    booking_datetime?: Date | string | null
    amount_value?: Decimal | DecimalJsLike | number | string | null
    amount_currency?: string | null
  }

  export type transactionsUpdateInput = {
    transaction_id?: StringFieldUpdateOperationsInput | string
    credit_debit_indicator?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    booking_datetime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    amount_value?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    amount_currency?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: accountsUpdateOneWithoutTransactionsNestedInput
  }

  export type transactionsUncheckedUpdateInput = {
    transaction_id?: StringFieldUpdateOperationsInput | string
    account_id?: NullableStringFieldUpdateOperationsInput | string | null
    credit_debit_indicator?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    booking_datetime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    amount_value?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    amount_currency?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type transactionsCreateManyInput = {
    transaction_id: string
    account_id?: string | null
    credit_debit_indicator?: string | null
    status?: string | null
    booking_datetime?: Date | string | null
    amount_value?: Decimal | DecimalJsLike | number | string | null
    amount_currency?: string | null
  }

  export type transactionsUpdateManyMutationInput = {
    transaction_id?: StringFieldUpdateOperationsInput | string
    credit_debit_indicator?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    booking_datetime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    amount_value?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    amount_currency?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type transactionsUncheckedUpdateManyInput = {
    transaction_id?: StringFieldUpdateOperationsInput | string
    account_id?: NullableStringFieldUpdateOperationsInput | string | null
    credit_debit_indicator?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    booking_datetime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    amount_value?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    amount_currency?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type AccountsRelationFilter = {
    is?: accountsWhereInput
    isNot?: accountsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type account_detailsAccount_idIdentificationCompoundUniqueInput = {
    account_id: string
    identification: string
  }

  export type account_detailsCountOrderByAggregateInput = {
    account_id?: SortOrder
    scheme_name?: SortOrder
    identification?: SortOrder
    name?: SortOrder
    secondary_identification?: SortOrder
  }

  export type account_detailsMaxOrderByAggregateInput = {
    account_id?: SortOrder
    scheme_name?: SortOrder
    identification?: SortOrder
    name?: SortOrder
    secondary_identification?: SortOrder
  }

  export type account_detailsMinOrderByAggregateInput = {
    account_id?: SortOrder
    scheme_name?: SortOrder
    identification?: SortOrder
    name?: SortOrder
    secondary_identification?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type Account_detailsListRelationFilter = {
    every?: account_detailsWhereInput
    some?: account_detailsWhereInput
    none?: account_detailsWhereInput
  }

  export type BalancesNullableRelationFilter = {
    is?: balancesWhereInput | null
    isNot?: balancesWhereInput | null
  }

  export type ServicersNullableRelationFilter = {
    is?: servicersWhereInput | null
    isNot?: servicersWhereInput | null
  }

  export type TransactionsListRelationFilter = {
    every?: transactionsWhereInput
    some?: transactionsWhereInput
    none?: transactionsWhereInput
  }

  export type account_detailsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type transactionsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type accountsCountOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    status_update_datetime?: SortOrder
    currency?: SortOrder
    account_type?: SortOrder
    account_sub_type?: SortOrder
    description?: SortOrder
    nickname?: SortOrder
    opening_date?: SortOrder
    maturity_date?: SortOrder
    switch_status?: SortOrder
  }

  export type accountsMaxOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    status_update_datetime?: SortOrder
    currency?: SortOrder
    account_type?: SortOrder
    account_sub_type?: SortOrder
    description?: SortOrder
    nickname?: SortOrder
    opening_date?: SortOrder
    maturity_date?: SortOrder
    switch_status?: SortOrder
  }

  export type accountsMinOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    status_update_datetime?: SortOrder
    currency?: SortOrder
    account_type?: SortOrder
    account_sub_type?: SortOrder
    description?: SortOrder
    nickname?: SortOrder
    opening_date?: SortOrder
    maturity_date?: SortOrder
    switch_status?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type balancesCountOrderByAggregateInput = {
    account_id?: SortOrder
    credit_debit_indicator?: SortOrder
    type?: SortOrder
    amount_value?: SortOrder
    amount_currency?: SortOrder
    date_time?: SortOrder
    credit_line_included?: SortOrder
    credit_line_amount_value?: SortOrder
    credit_line_amount_currency?: SortOrder
  }

  export type balancesAvgOrderByAggregateInput = {
    amount_value?: SortOrder
    credit_line_amount_value?: SortOrder
  }

  export type balancesMaxOrderByAggregateInput = {
    account_id?: SortOrder
    credit_debit_indicator?: SortOrder
    type?: SortOrder
    amount_value?: SortOrder
    amount_currency?: SortOrder
    date_time?: SortOrder
    credit_line_included?: SortOrder
    credit_line_amount_value?: SortOrder
    credit_line_amount_currency?: SortOrder
  }

  export type balancesMinOrderByAggregateInput = {
    account_id?: SortOrder
    credit_debit_indicator?: SortOrder
    type?: SortOrder
    amount_value?: SortOrder
    amount_currency?: SortOrder
    date_time?: SortOrder
    credit_line_included?: SortOrder
    credit_line_amount_value?: SortOrder
    credit_line_amount_currency?: SortOrder
  }

  export type balancesSumOrderByAggregateInput = {
    amount_value?: SortOrder
    credit_line_amount_value?: SortOrder
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type servicersCountOrderByAggregateInput = {
    account_id?: SortOrder
    scheme_name?: SortOrder
    identification?: SortOrder
  }

  export type servicersMaxOrderByAggregateInput = {
    account_id?: SortOrder
    scheme_name?: SortOrder
    identification?: SortOrder
  }

  export type servicersMinOrderByAggregateInput = {
    account_id?: SortOrder
    scheme_name?: SortOrder
    identification?: SortOrder
  }

  export type AccountsNullableRelationFilter = {
    is?: accountsWhereInput | null
    isNot?: accountsWhereInput | null
  }

  export type transactionsCountOrderByAggregateInput = {
    transaction_id?: SortOrder
    account_id?: SortOrder
    credit_debit_indicator?: SortOrder
    status?: SortOrder
    booking_datetime?: SortOrder
    amount_value?: SortOrder
    amount_currency?: SortOrder
  }

  export type transactionsAvgOrderByAggregateInput = {
    amount_value?: SortOrder
  }

  export type transactionsMaxOrderByAggregateInput = {
    transaction_id?: SortOrder
    account_id?: SortOrder
    credit_debit_indicator?: SortOrder
    status?: SortOrder
    booking_datetime?: SortOrder
    amount_value?: SortOrder
    amount_currency?: SortOrder
  }

  export type transactionsMinOrderByAggregateInput = {
    transaction_id?: SortOrder
    account_id?: SortOrder
    credit_debit_indicator?: SortOrder
    status?: SortOrder
    booking_datetime?: SortOrder
    amount_value?: SortOrder
    amount_currency?: SortOrder
  }

  export type transactionsSumOrderByAggregateInput = {
    amount_value?: SortOrder
  }

  export type accountsCreateNestedOneWithoutAccount_detailsInput = {
    create?: XOR<accountsCreateWithoutAccount_detailsInput, accountsUncheckedCreateWithoutAccount_detailsInput>
    connectOrCreate?: accountsCreateOrConnectWithoutAccount_detailsInput
    connect?: accountsWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type accountsUpdateOneRequiredWithoutAccount_detailsNestedInput = {
    create?: XOR<accountsCreateWithoutAccount_detailsInput, accountsUncheckedCreateWithoutAccount_detailsInput>
    connectOrCreate?: accountsCreateOrConnectWithoutAccount_detailsInput
    upsert?: accountsUpsertWithoutAccount_detailsInput
    connect?: accountsWhereUniqueInput
    update?: XOR<XOR<accountsUpdateToOneWithWhereWithoutAccount_detailsInput, accountsUpdateWithoutAccount_detailsInput>, accountsUncheckedUpdateWithoutAccount_detailsInput>
  }

  export type account_detailsCreateNestedManyWithoutAccountsInput = {
    create?: XOR<account_detailsCreateWithoutAccountsInput, account_detailsUncheckedCreateWithoutAccountsInput> | account_detailsCreateWithoutAccountsInput[] | account_detailsUncheckedCreateWithoutAccountsInput[]
    connectOrCreate?: account_detailsCreateOrConnectWithoutAccountsInput | account_detailsCreateOrConnectWithoutAccountsInput[]
    createMany?: account_detailsCreateManyAccountsInputEnvelope
    connect?: account_detailsWhereUniqueInput | account_detailsWhereUniqueInput[]
  }

  export type balancesCreateNestedOneWithoutAccountsInput = {
    create?: XOR<balancesCreateWithoutAccountsInput, balancesUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: balancesCreateOrConnectWithoutAccountsInput
    connect?: balancesWhereUniqueInput
  }

  export type servicersCreateNestedOneWithoutAccountsInput = {
    create?: XOR<servicersCreateWithoutAccountsInput, servicersUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: servicersCreateOrConnectWithoutAccountsInput
    connect?: servicersWhereUniqueInput
  }

  export type transactionsCreateNestedManyWithoutAccountsInput = {
    create?: XOR<transactionsCreateWithoutAccountsInput, transactionsUncheckedCreateWithoutAccountsInput> | transactionsCreateWithoutAccountsInput[] | transactionsUncheckedCreateWithoutAccountsInput[]
    connectOrCreate?: transactionsCreateOrConnectWithoutAccountsInput | transactionsCreateOrConnectWithoutAccountsInput[]
    createMany?: transactionsCreateManyAccountsInputEnvelope
    connect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
  }

  export type account_detailsUncheckedCreateNestedManyWithoutAccountsInput = {
    create?: XOR<account_detailsCreateWithoutAccountsInput, account_detailsUncheckedCreateWithoutAccountsInput> | account_detailsCreateWithoutAccountsInput[] | account_detailsUncheckedCreateWithoutAccountsInput[]
    connectOrCreate?: account_detailsCreateOrConnectWithoutAccountsInput | account_detailsCreateOrConnectWithoutAccountsInput[]
    createMany?: account_detailsCreateManyAccountsInputEnvelope
    connect?: account_detailsWhereUniqueInput | account_detailsWhereUniqueInput[]
  }

  export type balancesUncheckedCreateNestedOneWithoutAccountsInput = {
    create?: XOR<balancesCreateWithoutAccountsInput, balancesUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: balancesCreateOrConnectWithoutAccountsInput
    connect?: balancesWhereUniqueInput
  }

  export type servicersUncheckedCreateNestedOneWithoutAccountsInput = {
    create?: XOR<servicersCreateWithoutAccountsInput, servicersUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: servicersCreateOrConnectWithoutAccountsInput
    connect?: servicersWhereUniqueInput
  }

  export type transactionsUncheckedCreateNestedManyWithoutAccountsInput = {
    create?: XOR<transactionsCreateWithoutAccountsInput, transactionsUncheckedCreateWithoutAccountsInput> | transactionsCreateWithoutAccountsInput[] | transactionsUncheckedCreateWithoutAccountsInput[]
    connectOrCreate?: transactionsCreateOrConnectWithoutAccountsInput | transactionsCreateOrConnectWithoutAccountsInput[]
    createMany?: transactionsCreateManyAccountsInputEnvelope
    connect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type account_detailsUpdateManyWithoutAccountsNestedInput = {
    create?: XOR<account_detailsCreateWithoutAccountsInput, account_detailsUncheckedCreateWithoutAccountsInput> | account_detailsCreateWithoutAccountsInput[] | account_detailsUncheckedCreateWithoutAccountsInput[]
    connectOrCreate?: account_detailsCreateOrConnectWithoutAccountsInput | account_detailsCreateOrConnectWithoutAccountsInput[]
    upsert?: account_detailsUpsertWithWhereUniqueWithoutAccountsInput | account_detailsUpsertWithWhereUniqueWithoutAccountsInput[]
    createMany?: account_detailsCreateManyAccountsInputEnvelope
    set?: account_detailsWhereUniqueInput | account_detailsWhereUniqueInput[]
    disconnect?: account_detailsWhereUniqueInput | account_detailsWhereUniqueInput[]
    delete?: account_detailsWhereUniqueInput | account_detailsWhereUniqueInput[]
    connect?: account_detailsWhereUniqueInput | account_detailsWhereUniqueInput[]
    update?: account_detailsUpdateWithWhereUniqueWithoutAccountsInput | account_detailsUpdateWithWhereUniqueWithoutAccountsInput[]
    updateMany?: account_detailsUpdateManyWithWhereWithoutAccountsInput | account_detailsUpdateManyWithWhereWithoutAccountsInput[]
    deleteMany?: account_detailsScalarWhereInput | account_detailsScalarWhereInput[]
  }

  export type balancesUpdateOneWithoutAccountsNestedInput = {
    create?: XOR<balancesCreateWithoutAccountsInput, balancesUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: balancesCreateOrConnectWithoutAccountsInput
    upsert?: balancesUpsertWithoutAccountsInput
    disconnect?: balancesWhereInput | boolean
    delete?: balancesWhereInput | boolean
    connect?: balancesWhereUniqueInput
    update?: XOR<XOR<balancesUpdateToOneWithWhereWithoutAccountsInput, balancesUpdateWithoutAccountsInput>, balancesUncheckedUpdateWithoutAccountsInput>
  }

  export type servicersUpdateOneWithoutAccountsNestedInput = {
    create?: XOR<servicersCreateWithoutAccountsInput, servicersUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: servicersCreateOrConnectWithoutAccountsInput
    upsert?: servicersUpsertWithoutAccountsInput
    disconnect?: servicersWhereInput | boolean
    delete?: servicersWhereInput | boolean
    connect?: servicersWhereUniqueInput
    update?: XOR<XOR<servicersUpdateToOneWithWhereWithoutAccountsInput, servicersUpdateWithoutAccountsInput>, servicersUncheckedUpdateWithoutAccountsInput>
  }

  export type transactionsUpdateManyWithoutAccountsNestedInput = {
    create?: XOR<transactionsCreateWithoutAccountsInput, transactionsUncheckedCreateWithoutAccountsInput> | transactionsCreateWithoutAccountsInput[] | transactionsUncheckedCreateWithoutAccountsInput[]
    connectOrCreate?: transactionsCreateOrConnectWithoutAccountsInput | transactionsCreateOrConnectWithoutAccountsInput[]
    upsert?: transactionsUpsertWithWhereUniqueWithoutAccountsInput | transactionsUpsertWithWhereUniqueWithoutAccountsInput[]
    createMany?: transactionsCreateManyAccountsInputEnvelope
    set?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    disconnect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    delete?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    connect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    update?: transactionsUpdateWithWhereUniqueWithoutAccountsInput | transactionsUpdateWithWhereUniqueWithoutAccountsInput[]
    updateMany?: transactionsUpdateManyWithWhereWithoutAccountsInput | transactionsUpdateManyWithWhereWithoutAccountsInput[]
    deleteMany?: transactionsScalarWhereInput | transactionsScalarWhereInput[]
  }

  export type account_detailsUncheckedUpdateManyWithoutAccountsNestedInput = {
    create?: XOR<account_detailsCreateWithoutAccountsInput, account_detailsUncheckedCreateWithoutAccountsInput> | account_detailsCreateWithoutAccountsInput[] | account_detailsUncheckedCreateWithoutAccountsInput[]
    connectOrCreate?: account_detailsCreateOrConnectWithoutAccountsInput | account_detailsCreateOrConnectWithoutAccountsInput[]
    upsert?: account_detailsUpsertWithWhereUniqueWithoutAccountsInput | account_detailsUpsertWithWhereUniqueWithoutAccountsInput[]
    createMany?: account_detailsCreateManyAccountsInputEnvelope
    set?: account_detailsWhereUniqueInput | account_detailsWhereUniqueInput[]
    disconnect?: account_detailsWhereUniqueInput | account_detailsWhereUniqueInput[]
    delete?: account_detailsWhereUniqueInput | account_detailsWhereUniqueInput[]
    connect?: account_detailsWhereUniqueInput | account_detailsWhereUniqueInput[]
    update?: account_detailsUpdateWithWhereUniqueWithoutAccountsInput | account_detailsUpdateWithWhereUniqueWithoutAccountsInput[]
    updateMany?: account_detailsUpdateManyWithWhereWithoutAccountsInput | account_detailsUpdateManyWithWhereWithoutAccountsInput[]
    deleteMany?: account_detailsScalarWhereInput | account_detailsScalarWhereInput[]
  }

  export type balancesUncheckedUpdateOneWithoutAccountsNestedInput = {
    create?: XOR<balancesCreateWithoutAccountsInput, balancesUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: balancesCreateOrConnectWithoutAccountsInput
    upsert?: balancesUpsertWithoutAccountsInput
    disconnect?: balancesWhereInput | boolean
    delete?: balancesWhereInput | boolean
    connect?: balancesWhereUniqueInput
    update?: XOR<XOR<balancesUpdateToOneWithWhereWithoutAccountsInput, balancesUpdateWithoutAccountsInput>, balancesUncheckedUpdateWithoutAccountsInput>
  }

  export type servicersUncheckedUpdateOneWithoutAccountsNestedInput = {
    create?: XOR<servicersCreateWithoutAccountsInput, servicersUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: servicersCreateOrConnectWithoutAccountsInput
    upsert?: servicersUpsertWithoutAccountsInput
    disconnect?: servicersWhereInput | boolean
    delete?: servicersWhereInput | boolean
    connect?: servicersWhereUniqueInput
    update?: XOR<XOR<servicersUpdateToOneWithWhereWithoutAccountsInput, servicersUpdateWithoutAccountsInput>, servicersUncheckedUpdateWithoutAccountsInput>
  }

  export type transactionsUncheckedUpdateManyWithoutAccountsNestedInput = {
    create?: XOR<transactionsCreateWithoutAccountsInput, transactionsUncheckedCreateWithoutAccountsInput> | transactionsCreateWithoutAccountsInput[] | transactionsUncheckedCreateWithoutAccountsInput[]
    connectOrCreate?: transactionsCreateOrConnectWithoutAccountsInput | transactionsCreateOrConnectWithoutAccountsInput[]
    upsert?: transactionsUpsertWithWhereUniqueWithoutAccountsInput | transactionsUpsertWithWhereUniqueWithoutAccountsInput[]
    createMany?: transactionsCreateManyAccountsInputEnvelope
    set?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    disconnect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    delete?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    connect?: transactionsWhereUniqueInput | transactionsWhereUniqueInput[]
    update?: transactionsUpdateWithWhereUniqueWithoutAccountsInput | transactionsUpdateWithWhereUniqueWithoutAccountsInput[]
    updateMany?: transactionsUpdateManyWithWhereWithoutAccountsInput | transactionsUpdateManyWithWhereWithoutAccountsInput[]
    deleteMany?: transactionsScalarWhereInput | transactionsScalarWhereInput[]
  }

  export type accountsCreateNestedOneWithoutBalancesInput = {
    create?: XOR<accountsCreateWithoutBalancesInput, accountsUncheckedCreateWithoutBalancesInput>
    connectOrCreate?: accountsCreateOrConnectWithoutBalancesInput
    connect?: accountsWhereUniqueInput
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type accountsUpdateOneRequiredWithoutBalancesNestedInput = {
    create?: XOR<accountsCreateWithoutBalancesInput, accountsUncheckedCreateWithoutBalancesInput>
    connectOrCreate?: accountsCreateOrConnectWithoutBalancesInput
    upsert?: accountsUpsertWithoutBalancesInput
    connect?: accountsWhereUniqueInput
    update?: XOR<XOR<accountsUpdateToOneWithWhereWithoutBalancesInput, accountsUpdateWithoutBalancesInput>, accountsUncheckedUpdateWithoutBalancesInput>
  }

  export type accountsCreateNestedOneWithoutServicersInput = {
    create?: XOR<accountsCreateWithoutServicersInput, accountsUncheckedCreateWithoutServicersInput>
    connectOrCreate?: accountsCreateOrConnectWithoutServicersInput
    connect?: accountsWhereUniqueInput
  }

  export type accountsUpdateOneRequiredWithoutServicersNestedInput = {
    create?: XOR<accountsCreateWithoutServicersInput, accountsUncheckedCreateWithoutServicersInput>
    connectOrCreate?: accountsCreateOrConnectWithoutServicersInput
    upsert?: accountsUpsertWithoutServicersInput
    connect?: accountsWhereUniqueInput
    update?: XOR<XOR<accountsUpdateToOneWithWhereWithoutServicersInput, accountsUpdateWithoutServicersInput>, accountsUncheckedUpdateWithoutServicersInput>
  }

  export type accountsCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<accountsCreateWithoutTransactionsInput, accountsUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: accountsCreateOrConnectWithoutTransactionsInput
    connect?: accountsWhereUniqueInput
  }

  export type accountsUpdateOneWithoutTransactionsNestedInput = {
    create?: XOR<accountsCreateWithoutTransactionsInput, accountsUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: accountsCreateOrConnectWithoutTransactionsInput
    upsert?: accountsUpsertWithoutTransactionsInput
    disconnect?: accountsWhereInput | boolean
    delete?: accountsWhereInput | boolean
    connect?: accountsWhereUniqueInput
    update?: XOR<XOR<accountsUpdateToOneWithWhereWithoutTransactionsInput, accountsUpdateWithoutTransactionsInput>, accountsUncheckedUpdateWithoutTransactionsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type accountsCreateWithoutAccount_detailsInput = {
    id: string
    status?: string | null
    status_update_datetime?: Date | string | null
    currency?: string | null
    account_type?: string | null
    account_sub_type?: string | null
    description?: string | null
    nickname?: string | null
    opening_date?: Date | string | null
    maturity_date?: Date | string | null
    switch_status?: string | null
    balances?: balancesCreateNestedOneWithoutAccountsInput
    servicers?: servicersCreateNestedOneWithoutAccountsInput
    transactions?: transactionsCreateNestedManyWithoutAccountsInput
  }

  export type accountsUncheckedCreateWithoutAccount_detailsInput = {
    id: string
    status?: string | null
    status_update_datetime?: Date | string | null
    currency?: string | null
    account_type?: string | null
    account_sub_type?: string | null
    description?: string | null
    nickname?: string | null
    opening_date?: Date | string | null
    maturity_date?: Date | string | null
    switch_status?: string | null
    balances?: balancesUncheckedCreateNestedOneWithoutAccountsInput
    servicers?: servicersUncheckedCreateNestedOneWithoutAccountsInput
    transactions?: transactionsUncheckedCreateNestedManyWithoutAccountsInput
  }

  export type accountsCreateOrConnectWithoutAccount_detailsInput = {
    where: accountsWhereUniqueInput
    create: XOR<accountsCreateWithoutAccount_detailsInput, accountsUncheckedCreateWithoutAccount_detailsInput>
  }

  export type accountsUpsertWithoutAccount_detailsInput = {
    update: XOR<accountsUpdateWithoutAccount_detailsInput, accountsUncheckedUpdateWithoutAccount_detailsInput>
    create: XOR<accountsCreateWithoutAccount_detailsInput, accountsUncheckedCreateWithoutAccount_detailsInput>
    where?: accountsWhereInput
  }

  export type accountsUpdateToOneWithWhereWithoutAccount_detailsInput = {
    where?: accountsWhereInput
    data: XOR<accountsUpdateWithoutAccount_detailsInput, accountsUncheckedUpdateWithoutAccount_detailsInput>
  }

  export type accountsUpdateWithoutAccount_detailsInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    status_update_datetime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    account_type?: NullableStringFieldUpdateOperationsInput | string | null
    account_sub_type?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    opening_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maturity_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    switch_status?: NullableStringFieldUpdateOperationsInput | string | null
    balances?: balancesUpdateOneWithoutAccountsNestedInput
    servicers?: servicersUpdateOneWithoutAccountsNestedInput
    transactions?: transactionsUpdateManyWithoutAccountsNestedInput
  }

  export type accountsUncheckedUpdateWithoutAccount_detailsInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    status_update_datetime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    account_type?: NullableStringFieldUpdateOperationsInput | string | null
    account_sub_type?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    opening_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maturity_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    switch_status?: NullableStringFieldUpdateOperationsInput | string | null
    balances?: balancesUncheckedUpdateOneWithoutAccountsNestedInput
    servicers?: servicersUncheckedUpdateOneWithoutAccountsNestedInput
    transactions?: transactionsUncheckedUpdateManyWithoutAccountsNestedInput
  }

  export type account_detailsCreateWithoutAccountsInput = {
    scheme_name?: string | null
    identification: string
    name?: string | null
    secondary_identification?: string | null
  }

  export type account_detailsUncheckedCreateWithoutAccountsInput = {
    scheme_name?: string | null
    identification: string
    name?: string | null
    secondary_identification?: string | null
  }

  export type account_detailsCreateOrConnectWithoutAccountsInput = {
    where: account_detailsWhereUniqueInput
    create: XOR<account_detailsCreateWithoutAccountsInput, account_detailsUncheckedCreateWithoutAccountsInput>
  }

  export type account_detailsCreateManyAccountsInputEnvelope = {
    data: account_detailsCreateManyAccountsInput | account_detailsCreateManyAccountsInput[]
    skipDuplicates?: boolean
  }

  export type balancesCreateWithoutAccountsInput = {
    credit_debit_indicator?: string | null
    type?: string | null
    amount_value?: Decimal | DecimalJsLike | number | string | null
    amount_currency?: string | null
    date_time?: Date | string | null
    credit_line_included?: boolean | null
    credit_line_amount_value?: Decimal | DecimalJsLike | number | string | null
    credit_line_amount_currency?: string | null
  }

  export type balancesUncheckedCreateWithoutAccountsInput = {
    credit_debit_indicator?: string | null
    type?: string | null
    amount_value?: Decimal | DecimalJsLike | number | string | null
    amount_currency?: string | null
    date_time?: Date | string | null
    credit_line_included?: boolean | null
    credit_line_amount_value?: Decimal | DecimalJsLike | number | string | null
    credit_line_amount_currency?: string | null
  }

  export type balancesCreateOrConnectWithoutAccountsInput = {
    where: balancesWhereUniqueInput
    create: XOR<balancesCreateWithoutAccountsInput, balancesUncheckedCreateWithoutAccountsInput>
  }

  export type servicersCreateWithoutAccountsInput = {
    scheme_name?: string | null
    identification?: string | null
  }

  export type servicersUncheckedCreateWithoutAccountsInput = {
    scheme_name?: string | null
    identification?: string | null
  }

  export type servicersCreateOrConnectWithoutAccountsInput = {
    where: servicersWhereUniqueInput
    create: XOR<servicersCreateWithoutAccountsInput, servicersUncheckedCreateWithoutAccountsInput>
  }

  export type transactionsCreateWithoutAccountsInput = {
    transaction_id: string
    credit_debit_indicator?: string | null
    status?: string | null
    booking_datetime?: Date | string | null
    amount_value?: Decimal | DecimalJsLike | number | string | null
    amount_currency?: string | null
  }

  export type transactionsUncheckedCreateWithoutAccountsInput = {
    transaction_id: string
    credit_debit_indicator?: string | null
    status?: string | null
    booking_datetime?: Date | string | null
    amount_value?: Decimal | DecimalJsLike | number | string | null
    amount_currency?: string | null
  }

  export type transactionsCreateOrConnectWithoutAccountsInput = {
    where: transactionsWhereUniqueInput
    create: XOR<transactionsCreateWithoutAccountsInput, transactionsUncheckedCreateWithoutAccountsInput>
  }

  export type transactionsCreateManyAccountsInputEnvelope = {
    data: transactionsCreateManyAccountsInput | transactionsCreateManyAccountsInput[]
    skipDuplicates?: boolean
  }

  export type account_detailsUpsertWithWhereUniqueWithoutAccountsInput = {
    where: account_detailsWhereUniqueInput
    update: XOR<account_detailsUpdateWithoutAccountsInput, account_detailsUncheckedUpdateWithoutAccountsInput>
    create: XOR<account_detailsCreateWithoutAccountsInput, account_detailsUncheckedCreateWithoutAccountsInput>
  }

  export type account_detailsUpdateWithWhereUniqueWithoutAccountsInput = {
    where: account_detailsWhereUniqueInput
    data: XOR<account_detailsUpdateWithoutAccountsInput, account_detailsUncheckedUpdateWithoutAccountsInput>
  }

  export type account_detailsUpdateManyWithWhereWithoutAccountsInput = {
    where: account_detailsScalarWhereInput
    data: XOR<account_detailsUpdateManyMutationInput, account_detailsUncheckedUpdateManyWithoutAccountsInput>
  }

  export type account_detailsScalarWhereInput = {
    AND?: account_detailsScalarWhereInput | account_detailsScalarWhereInput[]
    OR?: account_detailsScalarWhereInput[]
    NOT?: account_detailsScalarWhereInput | account_detailsScalarWhereInput[]
    account_id?: StringFilter<"account_details"> | string
    scheme_name?: StringNullableFilter<"account_details"> | string | null
    identification?: StringFilter<"account_details"> | string
    name?: StringNullableFilter<"account_details"> | string | null
    secondary_identification?: StringNullableFilter<"account_details"> | string | null
  }

  export type balancesUpsertWithoutAccountsInput = {
    update: XOR<balancesUpdateWithoutAccountsInput, balancesUncheckedUpdateWithoutAccountsInput>
    create: XOR<balancesCreateWithoutAccountsInput, balancesUncheckedCreateWithoutAccountsInput>
    where?: balancesWhereInput
  }

  export type balancesUpdateToOneWithWhereWithoutAccountsInput = {
    where?: balancesWhereInput
    data: XOR<balancesUpdateWithoutAccountsInput, balancesUncheckedUpdateWithoutAccountsInput>
  }

  export type balancesUpdateWithoutAccountsInput = {
    credit_debit_indicator?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    amount_value?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    amount_currency?: NullableStringFieldUpdateOperationsInput | string | null
    date_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    credit_line_included?: NullableBoolFieldUpdateOperationsInput | boolean | null
    credit_line_amount_value?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    credit_line_amount_currency?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type balancesUncheckedUpdateWithoutAccountsInput = {
    credit_debit_indicator?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    amount_value?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    amount_currency?: NullableStringFieldUpdateOperationsInput | string | null
    date_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    credit_line_included?: NullableBoolFieldUpdateOperationsInput | boolean | null
    credit_line_amount_value?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    credit_line_amount_currency?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type servicersUpsertWithoutAccountsInput = {
    update: XOR<servicersUpdateWithoutAccountsInput, servicersUncheckedUpdateWithoutAccountsInput>
    create: XOR<servicersCreateWithoutAccountsInput, servicersUncheckedCreateWithoutAccountsInput>
    where?: servicersWhereInput
  }

  export type servicersUpdateToOneWithWhereWithoutAccountsInput = {
    where?: servicersWhereInput
    data: XOR<servicersUpdateWithoutAccountsInput, servicersUncheckedUpdateWithoutAccountsInput>
  }

  export type servicersUpdateWithoutAccountsInput = {
    scheme_name?: NullableStringFieldUpdateOperationsInput | string | null
    identification?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type servicersUncheckedUpdateWithoutAccountsInput = {
    scheme_name?: NullableStringFieldUpdateOperationsInput | string | null
    identification?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type transactionsUpsertWithWhereUniqueWithoutAccountsInput = {
    where: transactionsWhereUniqueInput
    update: XOR<transactionsUpdateWithoutAccountsInput, transactionsUncheckedUpdateWithoutAccountsInput>
    create: XOR<transactionsCreateWithoutAccountsInput, transactionsUncheckedCreateWithoutAccountsInput>
  }

  export type transactionsUpdateWithWhereUniqueWithoutAccountsInput = {
    where: transactionsWhereUniqueInput
    data: XOR<transactionsUpdateWithoutAccountsInput, transactionsUncheckedUpdateWithoutAccountsInput>
  }

  export type transactionsUpdateManyWithWhereWithoutAccountsInput = {
    where: transactionsScalarWhereInput
    data: XOR<transactionsUpdateManyMutationInput, transactionsUncheckedUpdateManyWithoutAccountsInput>
  }

  export type transactionsScalarWhereInput = {
    AND?: transactionsScalarWhereInput | transactionsScalarWhereInput[]
    OR?: transactionsScalarWhereInput[]
    NOT?: transactionsScalarWhereInput | transactionsScalarWhereInput[]
    transaction_id?: StringFilter<"transactions"> | string
    account_id?: StringNullableFilter<"transactions"> | string | null
    credit_debit_indicator?: StringNullableFilter<"transactions"> | string | null
    status?: StringNullableFilter<"transactions"> | string | null
    booking_datetime?: DateTimeNullableFilter<"transactions"> | Date | string | null
    amount_value?: DecimalNullableFilter<"transactions"> | Decimal | DecimalJsLike | number | string | null
    amount_currency?: StringNullableFilter<"transactions"> | string | null
  }

  export type accountsCreateWithoutBalancesInput = {
    id: string
    status?: string | null
    status_update_datetime?: Date | string | null
    currency?: string | null
    account_type?: string | null
    account_sub_type?: string | null
    description?: string | null
    nickname?: string | null
    opening_date?: Date | string | null
    maturity_date?: Date | string | null
    switch_status?: string | null
    account_details?: account_detailsCreateNestedManyWithoutAccountsInput
    servicers?: servicersCreateNestedOneWithoutAccountsInput
    transactions?: transactionsCreateNestedManyWithoutAccountsInput
  }

  export type accountsUncheckedCreateWithoutBalancesInput = {
    id: string
    status?: string | null
    status_update_datetime?: Date | string | null
    currency?: string | null
    account_type?: string | null
    account_sub_type?: string | null
    description?: string | null
    nickname?: string | null
    opening_date?: Date | string | null
    maturity_date?: Date | string | null
    switch_status?: string | null
    account_details?: account_detailsUncheckedCreateNestedManyWithoutAccountsInput
    servicers?: servicersUncheckedCreateNestedOneWithoutAccountsInput
    transactions?: transactionsUncheckedCreateNestedManyWithoutAccountsInput
  }

  export type accountsCreateOrConnectWithoutBalancesInput = {
    where: accountsWhereUniqueInput
    create: XOR<accountsCreateWithoutBalancesInput, accountsUncheckedCreateWithoutBalancesInput>
  }

  export type accountsUpsertWithoutBalancesInput = {
    update: XOR<accountsUpdateWithoutBalancesInput, accountsUncheckedUpdateWithoutBalancesInput>
    create: XOR<accountsCreateWithoutBalancesInput, accountsUncheckedCreateWithoutBalancesInput>
    where?: accountsWhereInput
  }

  export type accountsUpdateToOneWithWhereWithoutBalancesInput = {
    where?: accountsWhereInput
    data: XOR<accountsUpdateWithoutBalancesInput, accountsUncheckedUpdateWithoutBalancesInput>
  }

  export type accountsUpdateWithoutBalancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    status_update_datetime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    account_type?: NullableStringFieldUpdateOperationsInput | string | null
    account_sub_type?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    opening_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maturity_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    switch_status?: NullableStringFieldUpdateOperationsInput | string | null
    account_details?: account_detailsUpdateManyWithoutAccountsNestedInput
    servicers?: servicersUpdateOneWithoutAccountsNestedInput
    transactions?: transactionsUpdateManyWithoutAccountsNestedInput
  }

  export type accountsUncheckedUpdateWithoutBalancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    status_update_datetime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    account_type?: NullableStringFieldUpdateOperationsInput | string | null
    account_sub_type?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    opening_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maturity_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    switch_status?: NullableStringFieldUpdateOperationsInput | string | null
    account_details?: account_detailsUncheckedUpdateManyWithoutAccountsNestedInput
    servicers?: servicersUncheckedUpdateOneWithoutAccountsNestedInput
    transactions?: transactionsUncheckedUpdateManyWithoutAccountsNestedInput
  }

  export type accountsCreateWithoutServicersInput = {
    id: string
    status?: string | null
    status_update_datetime?: Date | string | null
    currency?: string | null
    account_type?: string | null
    account_sub_type?: string | null
    description?: string | null
    nickname?: string | null
    opening_date?: Date | string | null
    maturity_date?: Date | string | null
    switch_status?: string | null
    account_details?: account_detailsCreateNestedManyWithoutAccountsInput
    balances?: balancesCreateNestedOneWithoutAccountsInput
    transactions?: transactionsCreateNestedManyWithoutAccountsInput
  }

  export type accountsUncheckedCreateWithoutServicersInput = {
    id: string
    status?: string | null
    status_update_datetime?: Date | string | null
    currency?: string | null
    account_type?: string | null
    account_sub_type?: string | null
    description?: string | null
    nickname?: string | null
    opening_date?: Date | string | null
    maturity_date?: Date | string | null
    switch_status?: string | null
    account_details?: account_detailsUncheckedCreateNestedManyWithoutAccountsInput
    balances?: balancesUncheckedCreateNestedOneWithoutAccountsInput
    transactions?: transactionsUncheckedCreateNestedManyWithoutAccountsInput
  }

  export type accountsCreateOrConnectWithoutServicersInput = {
    where: accountsWhereUniqueInput
    create: XOR<accountsCreateWithoutServicersInput, accountsUncheckedCreateWithoutServicersInput>
  }

  export type accountsUpsertWithoutServicersInput = {
    update: XOR<accountsUpdateWithoutServicersInput, accountsUncheckedUpdateWithoutServicersInput>
    create: XOR<accountsCreateWithoutServicersInput, accountsUncheckedCreateWithoutServicersInput>
    where?: accountsWhereInput
  }

  export type accountsUpdateToOneWithWhereWithoutServicersInput = {
    where?: accountsWhereInput
    data: XOR<accountsUpdateWithoutServicersInput, accountsUncheckedUpdateWithoutServicersInput>
  }

  export type accountsUpdateWithoutServicersInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    status_update_datetime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    account_type?: NullableStringFieldUpdateOperationsInput | string | null
    account_sub_type?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    opening_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maturity_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    switch_status?: NullableStringFieldUpdateOperationsInput | string | null
    account_details?: account_detailsUpdateManyWithoutAccountsNestedInput
    balances?: balancesUpdateOneWithoutAccountsNestedInput
    transactions?: transactionsUpdateManyWithoutAccountsNestedInput
  }

  export type accountsUncheckedUpdateWithoutServicersInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    status_update_datetime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    account_type?: NullableStringFieldUpdateOperationsInput | string | null
    account_sub_type?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    opening_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maturity_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    switch_status?: NullableStringFieldUpdateOperationsInput | string | null
    account_details?: account_detailsUncheckedUpdateManyWithoutAccountsNestedInput
    balances?: balancesUncheckedUpdateOneWithoutAccountsNestedInput
    transactions?: transactionsUncheckedUpdateManyWithoutAccountsNestedInput
  }

  export type accountsCreateWithoutTransactionsInput = {
    id: string
    status?: string | null
    status_update_datetime?: Date | string | null
    currency?: string | null
    account_type?: string | null
    account_sub_type?: string | null
    description?: string | null
    nickname?: string | null
    opening_date?: Date | string | null
    maturity_date?: Date | string | null
    switch_status?: string | null
    account_details?: account_detailsCreateNestedManyWithoutAccountsInput
    balances?: balancesCreateNestedOneWithoutAccountsInput
    servicers?: servicersCreateNestedOneWithoutAccountsInput
  }

  export type accountsUncheckedCreateWithoutTransactionsInput = {
    id: string
    status?: string | null
    status_update_datetime?: Date | string | null
    currency?: string | null
    account_type?: string | null
    account_sub_type?: string | null
    description?: string | null
    nickname?: string | null
    opening_date?: Date | string | null
    maturity_date?: Date | string | null
    switch_status?: string | null
    account_details?: account_detailsUncheckedCreateNestedManyWithoutAccountsInput
    balances?: balancesUncheckedCreateNestedOneWithoutAccountsInput
    servicers?: servicersUncheckedCreateNestedOneWithoutAccountsInput
  }

  export type accountsCreateOrConnectWithoutTransactionsInput = {
    where: accountsWhereUniqueInput
    create: XOR<accountsCreateWithoutTransactionsInput, accountsUncheckedCreateWithoutTransactionsInput>
  }

  export type accountsUpsertWithoutTransactionsInput = {
    update: XOR<accountsUpdateWithoutTransactionsInput, accountsUncheckedUpdateWithoutTransactionsInput>
    create: XOR<accountsCreateWithoutTransactionsInput, accountsUncheckedCreateWithoutTransactionsInput>
    where?: accountsWhereInput
  }

  export type accountsUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: accountsWhereInput
    data: XOR<accountsUpdateWithoutTransactionsInput, accountsUncheckedUpdateWithoutTransactionsInput>
  }

  export type accountsUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    status_update_datetime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    account_type?: NullableStringFieldUpdateOperationsInput | string | null
    account_sub_type?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    opening_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maturity_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    switch_status?: NullableStringFieldUpdateOperationsInput | string | null
    account_details?: account_detailsUpdateManyWithoutAccountsNestedInput
    balances?: balancesUpdateOneWithoutAccountsNestedInput
    servicers?: servicersUpdateOneWithoutAccountsNestedInput
  }

  export type accountsUncheckedUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    status_update_datetime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    account_type?: NullableStringFieldUpdateOperationsInput | string | null
    account_sub_type?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    opening_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maturity_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    switch_status?: NullableStringFieldUpdateOperationsInput | string | null
    account_details?: account_detailsUncheckedUpdateManyWithoutAccountsNestedInput
    balances?: balancesUncheckedUpdateOneWithoutAccountsNestedInput
    servicers?: servicersUncheckedUpdateOneWithoutAccountsNestedInput
  }

  export type account_detailsCreateManyAccountsInput = {
    scheme_name?: string | null
    identification: string
    name?: string | null
    secondary_identification?: string | null
  }

  export type transactionsCreateManyAccountsInput = {
    transaction_id: string
    credit_debit_indicator?: string | null
    status?: string | null
    booking_datetime?: Date | string | null
    amount_value?: Decimal | DecimalJsLike | number | string | null
    amount_currency?: string | null
  }

  export type account_detailsUpdateWithoutAccountsInput = {
    scheme_name?: NullableStringFieldUpdateOperationsInput | string | null
    identification?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    secondary_identification?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type account_detailsUncheckedUpdateWithoutAccountsInput = {
    scheme_name?: NullableStringFieldUpdateOperationsInput | string | null
    identification?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    secondary_identification?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type account_detailsUncheckedUpdateManyWithoutAccountsInput = {
    scheme_name?: NullableStringFieldUpdateOperationsInput | string | null
    identification?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    secondary_identification?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type transactionsUpdateWithoutAccountsInput = {
    transaction_id?: StringFieldUpdateOperationsInput | string
    credit_debit_indicator?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    booking_datetime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    amount_value?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    amount_currency?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type transactionsUncheckedUpdateWithoutAccountsInput = {
    transaction_id?: StringFieldUpdateOperationsInput | string
    credit_debit_indicator?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    booking_datetime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    amount_value?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    amount_currency?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type transactionsUncheckedUpdateManyWithoutAccountsInput = {
    transaction_id?: StringFieldUpdateOperationsInput | string
    credit_debit_indicator?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    booking_datetime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    amount_value?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    amount_currency?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use AccountsCountOutputTypeDefaultArgs instead
     */
    export type AccountsCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AccountsCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use account_detailsDefaultArgs instead
     */
    export type account_detailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = account_detailsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use accountsDefaultArgs instead
     */
    export type accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = accountsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use balancesDefaultArgs instead
     */
    export type balancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = balancesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use servicersDefaultArgs instead
     */
    export type servicersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = servicersDefaultArgs<ExtArgs>
    /**
     * @deprecated Use transactionsDefaultArgs instead
     */
    export type transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = transactionsDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}